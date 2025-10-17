import React, { useState } from 'react';
import styled from 'styled-components';
import AddTodo from '../todo/AddTodo';
import Filter from '../todo/Filter';
import TodoList from '../todo/TodoList';
import ResetButton from '../common/ResetButton';
import { COLORS } from '../../utils/constants';
import UndoButton from '../common/UndoButton';

const Wrapper = styled.div`
  background: ${COLORS.backgroundGradient};
  min-height: calc(100vh - 80px);
  padding: 2rem 3rem;
`;

const Content = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Todo = () => {
  const [filter, setFilter] = useState('all');

  return (
    <Wrapper>
      <Content>
        <AddTodo />
        <Filter currentFilter={filter} setFilter={setFilter} />
        <TodoList filter={filter} />
        <ResetButton />
        <UndoButton />
      </Content>
    </Wrapper>
  );
};

export default Todo;
