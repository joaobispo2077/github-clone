import React from 'react';
import { Link } from 'react-router-dom';

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
  const username = 'joaobispo2077';
  const reponame = 'happy';
  const description =
    'O Happy é uma plataforma que mapeia orfanatos com o intuito de doadores de sonhos e instituições encontrarem-os de forma eficiente.';
  const stars = 3;
  const forks = 0;

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
