import React from 'react';

import { Container, RepoIcon } from './styles';

export type TabContentProps = {
  public_repos: number;
};

const TabContent: React.FC<TabContentProps> = ({ public_repos }) => {
  return (
    <Container>
      <div className="content">
        <RepoIcon />
        <span className="label">Repositories</span>
        <span className="number">{public_repos}</span>
      </div>
    </Container>
  );
};

export default TabContent;
