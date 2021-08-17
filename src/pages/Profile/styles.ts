import styled from 'styled-components';

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  padding: var(--verticalPadding) var(--horizontalPadding);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LefSide = styled.aside`
  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.section`
  @media (min-width: 768px) {
    width: 75%;
  }
`;
