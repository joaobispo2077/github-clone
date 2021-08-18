import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProfileData from '../../components/ProfileData';
import RandomCalendar from '../../components/RandomCalendar';
import RepoCard from '../../components/RepoCard';
import TabList from '../../components/TabList';

import {
  Container,
  Main,
  LefSide,
  RightSide,
  RepoCardList,
  CalendarHeading,
} from './styles';

export interface APIUser {
  login: string;
  name: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  bio?: string;
  email?: string;
  company?: string;
  blog?: string;
  location?: string;
}

export interface APIRepo {
  name: string;
  owner: {
    login: string;
  };
  stargazes_count: number;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<APIUser>();
  const [repos, setRepos] = useState<APIRepo[]>();
  const [error, setError] = useState<string>();

  const { username = 'joaobispo2077' } = useParams();

  const handleLoadUserData = useCallback(async () => {
    console.log('chargeds');
    const [userResponse, repoListResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]);

    if (userResponse.status === 404) {
      setError('User not found');
      return;
    }

    const userData = await userResponse.json();
    const repoList = await repoListResponse.json();

    const shuffledRepos = repoList.sort(() => 0.5 - Math.random());
    const slicedRepos = shuffledRepos.slice(0, 6);

    setUser(userData);
    setRepos(slicedRepos);
  }, [username]);

  useEffect(() => {
    handleLoadUserData();
  }, [handleLoadUserData]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!user || !repos) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <TabList dispositive={'desktop'} public_repos={user.public_repos} />
      <Main>
        <LefSide>
          <ProfileData
            username={user.login}
            name={user.name}
            avatarUrl={user.avatar_url}
            bio={user.bio}
            followers={user.followers}
            following={user.following}
            company={user.company}
            location={user.location}
            email={user.email}
            blog={user.blog}
          />
        </LefSide>
        <RightSide>
          <TabList dispositive={'mobile'} public_repos={user.public_repos} />
          <h2>Pinned</h2>
          <RepoCardList>
            {repos.map((repo) => (
              <li key={repo.name}>
                <RepoCard
                  username={repo.owner.login}
                  reponame={repo.name}
                  description={repo.description}
                  language={repo.language}
                  stars={repo.stargazes_count}
                  forks={repo.forks}
                />
              </li>
            ))}
          </RepoCardList>

          <CalendarHeading>Random calendar</CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
