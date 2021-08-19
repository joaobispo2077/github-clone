import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasSearchQuery = searchQuery.length > 0;

    console.log(searchQuery);
    if (!hasSearchQuery) return;
    console.info('go to repo or user page');

    return navigate(`/${searchQuery}`);
  };

  return (
    <Container>
      <GithubLogo />
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
