import styled from 'styled-components';

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  padding: var(--verticalPadding) var(--horizontalPadding);
  overflow-x: hidden;
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
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.section`
  margin-top: var(--verticalPadding);
  padding: 0 var(--horizontalPadding);

  > h2 {
    font-size: 16px;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const RepoCardList = styled.ol`
  margin-top: 8px;
  display: grid;
  grid-gap: 16px;

  grid-template-columns: 1fr;

  li {
    display: flex;
    flex: 1;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(min-content, max-content);
  }
`;

export const CalendarHeading = styled.span`
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex;
`;
