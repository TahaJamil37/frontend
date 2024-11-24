import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ImageTab: React.FC = () => {
  const { selectedItemDetails } = useSelector((state: RootState) => state.items);

  if (!selectedItemDetails) return <div>Select an item to view its image.</div>;

  return (
    <img src={`/image/${selectedItemDetails.propString}`} alt="Item" />
  );
};

export default ImageTab;
