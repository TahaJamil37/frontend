import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PropertiesTab: React.FC = () => {
  const { selectedItemDetails } = useSelector((state: RootState) => state.items);

  if (!selectedItemDetails) return <div>Select an item to view its properties.</div>;

  return (
    <div>
      <p>propString: {selectedItemDetails.propString}</p>
      <p>propNumber: {selectedItemDetails.propNumber}</p>
      <p>date: {selectedItemDetails.date}</p>
    </div>
  );
};

export default PropertiesTab;
