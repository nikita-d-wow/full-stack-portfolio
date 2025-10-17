import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { toggleTask, deleteTask } from '../../store/todoSlice';
import { setLastDeleted } from '../../store/undoSLice';
import { COLORS } from '../../utils/constants';
import EmptyState from './EmptyState';

// === Styled Components ===
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Item = styled.li`
  background: transparent;
  border: 1px solid ${COLORS.white};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.black};
  flex-wrap: wrap;
  gap: 0.6rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.span`
  ${({ $completed }) =>
    $completed
      ? css`
          text-decoration: line-through;
          color: ${COLORS.gray};
        `
      : css`
          color: ${COLORS.white};
        `}
`;

const Button = styled.button`
  border: none;
  padding: 0.4rem 0.8rem;
  margin-left: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  color: ${COLORS.white};
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  ${({ variant }) => {
    switch (variant) {
      case 'DONE':
        return css`
          background: ${COLORS.purpleGradient};
          &:hover {
            opacity: 0.8;
          }
        `;
      case 'UNDO':
        return css`
          background: ${COLORS.blueGradient};
          &:hover {
            opacity: 0.8;
          }
        `;
      case 'DELETE':
        return css`
          background: ${COLORS.redGradient};
          &:hover {
            opacity: 0.8;
          }
        `;
      default:
        return css``;
    }
  }}
`;

// === Component ===
export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const filter = useSelector((state) => state.todos.filter);
  const lastDeleted = useSelector((state) => state.undo.lastDeleted);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.isCompleted;
    if (filter === 'completed') return todo.isCompleted;
    return true;
  });

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDelete = (todo) => {
    dispatch(deleteTask(todo.id));
    dispatch(setLastDeleted(todo));
  };

  const handleUndo = () => {
    if (lastDeleted) {
      dispatch(toggleTask(lastDeleted.id));
    }
  };

  return filteredTodos.length === 0 ? (
    <EmptyState message="No todos found, add your first todo!" />
  ) : (
    <List>
      {filteredTodos.map((todo) => (
        <Item key={todo.id}>
          <Title $completed={todo.isCompleted}>
            {todo.text || todo.title}
            {todo.category && ` (${todo.category})`}
          </Title>
          <div>
            <Button
              variant={todo.isCompleted ? 'UNDO' : 'DONE'}
              onClick={() => handleToggle(todo.id)}
            >
              {todo.isCompleted ? 'Undo' : 'Done'}
            </Button>
            <Button variant="DELETE" onClick={() => handleDelete(todo)}>
              Delete
            </Button>
          </div>
        </Item>
      ))}

      {lastDeleted && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Button variant="UNDO" onClick={handleUndo}>
            Undo Delete
          </Button>
        </div>
      )}
    </List>
  );
}
