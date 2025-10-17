import React from 'react';
import styled from 'styled-components';
import Dropdown from '../common/Dropdown';
import { COLORS, FILTERS } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/todoSlice';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
`;

export default function Filter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.todos.filter);

  const handleChange = (e) => {
    const next = e.target.value;
    dispatch(setFilter(next));
  };

  return (
    <Wrapper>
      <Dropdown options={FILTERS} value={currentFilter} onChange={handleChange} />
    </Wrapper>
  );
}
