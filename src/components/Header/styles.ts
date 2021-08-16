import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.header`
  display: flex;
  align-items: center;
  background: var(--header);

  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  height: 32px;
  width: 32px;
  flex-shrink: 0;
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;

  input {
    background: var(--search);
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;

    color: white;
    transition: width 200ms ease-out, color 200ms ease-out;

    &:focus {
      width: 318px;

      &::placeholder {
        color: var(--gray);
      }
    }
  }
`;
