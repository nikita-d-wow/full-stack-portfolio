import React from 'react';
import styled from 'styled-components';
import BarChart from '../charts/BarChart';
import { COLORS } from '../../utils/constants';

const Wrapper = styled.section`
  background: ${COLORS.backgroundGradient};
  min-height: calc(100vh - 80px);
  padding: 2rem 3rem;
`;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  background: ${COLORS.white};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

const Title = styled.h2`
  color: ${COLORS.primary};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Home = () => {
  return (
    <Wrapper>
      {/* <Container> */}
      {/* <Title>Todo Statistics</Title> */}
      <BarChart />
      {/* </Container> */}
    </Wrapper>
  );
};

export default Home;
