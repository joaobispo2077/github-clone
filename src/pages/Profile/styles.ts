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
  margin-top: var(--verticalPadding);

  > h2 {
    font-size: 16px;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    width: 75%;
    margin: 0 8px 8px 24px;
  }
`;

export const RepoCardList = styled.ol`
  margin-top: 8px;
  display: grid;
  grid-gap: 16px;

  grid-template-columns: 1fr;

  li {
    display: flex;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(min-content, max-content);
  }
`;
