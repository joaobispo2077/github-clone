import React from 'react';
import TabContent from '../TabContent';

import { Container } from './styles';

const TabList: React.FC = () => {
  return (
    <Container className="mobile">
      <TabContent />
      <span className="line"></span>
    </Container>
  );
};

export default TabList;
