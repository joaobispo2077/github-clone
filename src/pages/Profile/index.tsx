import React from 'react';
import ProfileData from '../../components/ProfileData';

import { Container, Main, LefSide, RightSide } from './styles';

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
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
