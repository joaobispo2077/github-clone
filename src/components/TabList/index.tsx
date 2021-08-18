import React from 'react';
import TabContent, { TabContentProps } from '../TabContent';

import { Container } from './styles';

export type TabListProps = {
  dispositive: 'mobile' | 'desktop';
} & TabContentProps;

const TabList: React.FC<TabListProps> = ({ dispositive, public_repos }) => {
  return (
    <Container className={dispositive}>
      <div className="wrapper">
        <span className="offset" />
        <TabContent public_repos={public_repos} />
      </div>
      <span className="line"></span>
    </Container>
  );
};

export default TabList;
