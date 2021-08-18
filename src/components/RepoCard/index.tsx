import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  TopSide,
  RepoIcon,
  StarIcon,
  ForkIcon,
  Botside,
} from './styles';

export type RepoCardProps = {
  username: string;
  reponame: string;
  stars: number;
  forks: number;
  description?: string;
  language?: string;
};

const RepoCard: React.FC<RepoCardProps> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : 'other';

  return (
    <Container>
      <TopSide>
        <RepoIcon />
        <Link to={`${username}/${reponame}`}>{reponame}</Link>
      </TopSide>

      <p>{description}</p>

      <Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>

          {stars > 0 && (
            <li>
              <StarIcon />
              <span>{stars}</span>
            </li>
          )}

          {forks > 0 && (
            <li>
              <ForkIcon />
              <span>{forks}</span>
            </li>
          )}
        </ul>
      </Botside>
    </Container>
  );
};

export default RepoCard;
