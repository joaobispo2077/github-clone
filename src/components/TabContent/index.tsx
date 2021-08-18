import React from 'react';

import { Container, RepoIcon } from './styles';

const TabContent: React.FC = () => {
  return (
    <Container>
      <div className="content">
        <RepoIcon />
        <span className="label">Repositories</span>
        <span className="number">75</span>
      </div>
    </Container>
  );
};

export default TabContent;
