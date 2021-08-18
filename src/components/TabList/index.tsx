import React from 'react';
import TabContent from '../TabContent';

import { Container } from './styles';

export type TabListProps = {
  dispositive: 'mobile' | 'desktop';
};

const TabList: React.FC<TabListProps> = ({ dispositive }) => {
  return (
    <Container className={dispositive}>
      <div className="wrapper">
        <span className="offset" />
        <TabContent />
      </div>
      <span className="line"></span>
    </Container>
  );
};

export default TabList;
