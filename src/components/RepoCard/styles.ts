import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

export const Container = styled.article`
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;

  > p {
    margin: 8px 0 16px;
    font-size: 12px;
    letter-spacing: 0.1px;
    color: var(--gray);
  }
`;

export const TopSide = styled.header`
  display: flex;
  align-items: center;

  > a {
    margin-left: 8px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    color: var(--link);

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const iconStyles = css`
  width: 16px;
  height: 16px;

  fill: var(--icon);
  flex-shrink: 0;
`;
export const RepoIcon = styled(RiBookMarkLine)`
  ${iconStyles}
`;
export const StarIcon = styled(RiStarLine)`
  ${iconStyles}
`;
export const ForkIcon = styled(AiOutlineFork)`
  ${iconStyles}
`;

export const Botside = styled.footer`
  > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      display: flex;
      align-items: center;
      margin-right: 16px;

      > span {
        margin-left: 5px;
        font-size: 12px;
        color: var(--gray);
      }
    }
  }

  .language {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;

    &.other {
      background-color: var(--other-language);
    }

    &.javascript {
      background-color: var(--javascript);
    }

    &.typescript {
      background-color: var(--typescript);
    }
  }
`;
