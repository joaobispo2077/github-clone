import React from 'react';
import ProfileData from '../../components/ProfileData';
import RandomCalendar from '../../components/RandomCalendar';
import RepoCard from '../../components/RepoCard';

import {
  Container,
  Main,
  LefSide,
  RightSide,
  RepoCardList,
  CalendarHeading,
} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LefSide>
          <ProfileData
            username={'joaobispo2077'}
            name={'João Bispo'}
            avatarUrl={'http://www.github.com/joaobispo2077.png'}
            bio={
              '\r\nA full-stack developer who loves to apply his knowledge to solve problems, and aims to create amazing products and impact lives.'
            }
            followers={2}
            following={1}
            company={'Savelivez'}
            location={'São Paulo, Brazil'}
            email={'joaobispo2077@gmail.com'}
            blog={'linkedin.com/in/joaobispo2077'}
          />
        </LefSide>
        <RightSide>
          <h2>Pinned</h2>
          <RepoCardList>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <li key={item}>
                <RepoCard
                  username={'joaobispo2077'}
                  reponame={'quanto-tempo-falta-enem'}
                  description={
                    'Aplicação para conferir quanto tempo falta para o enem. (Vanilla..Js | deployed)'
                  }
                  language={item % 2 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={1}
                  forks={3}
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
