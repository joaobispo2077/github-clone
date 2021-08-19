import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repository: React.FC = () => {
  const location = useLocation();

  const [username, setUsername] = useState<string>();
  const [reponame, setReponame] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [stars, setStars] = useState<number>();
  const [forks, setForks] = useState<number>();
  const [error, setError] = useState<string>();

  const handleLoadRepoData = useCallback(
    async (username: string, reponame: string) => {
      console.log('charge');
      setUsername(username);
      setReponame(reponame);

      const response = await fetch(
        `https://api.github.com/repos/${username}/${reponame}`,
      );

      if (response.status === 404) {
        setError('Repositório não encontrado');
        return;
      }

      const repodata = await response.json();

      setDescription(repodata.description);
      setStars(repodata.stargazers_count);
      setForks(repodata.forks);
    },
    [],
  );

  useEffect(() => {
    const [, searchUsername, searchReponame] = location.pathname.split('/');

    if (!searchUsername || !searchReponame) {
      setError('Digite o nome da conta e do repositório');
      return;
    }

    setUsername(searchUsername.trim());
    setReponame(searchReponame.trim());

    handleLoadRepoData(searchUsername.trim(), searchReponame.trim());
  }, [handleLoadRepoData, location]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className="username" to={`/${username}`}>
          {username}
        </Link>

        <span>/</span>

        <Link className="reponame" to={`/${username}/${reponame}`}>
          {reponame}
        </Link>
      </Breadcrumb>

      <p>{description}</p>

      <Stats>
        <li>
          <StarIcon />
          <b>{stars}</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>{forks}</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={`https://github.com/${username}/${reponame}`}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repository;
