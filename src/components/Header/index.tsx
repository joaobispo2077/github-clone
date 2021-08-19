import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import { useNavigate } from 'react-router';
import { ThemeName } from '../../styles/themes';

import { Container, GithubLogo, SearchForm } from './styles';

export type HeaderProps = {
  themeName: ThemeName;
  setThemeName: Dispatch<SetStateAction<ThemeName>>;
};

const Header: React.FC<HeaderProps> = ({ themeName, setThemeName }) => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleToggleTheme = () => {
    const newTheme = themeName === 'light' ? 'dark' : 'light';
    setThemeName(newTheme);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasSearchQuery = searchQuery.length > 0;

    console.log(searchQuery);
    if (!hasSearchQuery) return;
    console.info('go to repo or user page');

    return navigate(`/${searchQuery.trim()}`);
  };

  return (
    <Container>
      <GithubLogo onClick={handleToggleTheme} arial-label="Toggle theme" />
      <SearchForm onSubmit={handleSearch}>
        <input
          placeholder="Search or jump to..."
          type="text"
          value={searchQuery}
          onChange={handleInput}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
