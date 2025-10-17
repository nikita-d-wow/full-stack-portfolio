import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/todoSlice';
import { COLORS } from '../../utils/constants';
import Button from '../common/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
  background: ${COLORS.white};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const InputWrapper = styled.div`
  flex: 1 1 0;
  min-width: 0;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem 0.2rem;
  border: 1px solid ${COLORS.gray};
  border-radius: 6px;
  font-size: 1rem;
  color: ${COLORS.text};

  &:focus {
    outline: 2px solid ${COLORS.primary};
  }
`;

const AddButtonWrapper = styled.div`
  flex: 0 0 auto;
  min-width: 100px;

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const ErrorText = styled.span`
  color: ${COLORS.danger};
  font-size: 0.9rem;
`;

export default function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Todo cannot be empty');
      return;
    }
    dispatch(addTask({ title: text, isCompleted: false }));
    setText('');
    setError('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Add a new task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </InputWrapper>
        <AddButtonWrapper>
          <Button type="submit" $type="PRIMARY">
            Add
          </Button>
        </AddButtonWrapper>
      </Row>
      {error && <ErrorText>{error}</ErrorText>}
    </Form>
  );
}
