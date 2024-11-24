import React from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import PropertiesTab from './PropertiesTab';
import ImageTab from './ImageTab';

const DetailsTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <Box>
      <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
        <Tab label="Properties" />
        <Tab label="Image" />
      </Tabs>
      {selectedTab === 0 && <PropertiesTab />}
      {selectedTab === 1 && <ImageTab />}
    </Box>
  );
};

export default DetailsTabs;
