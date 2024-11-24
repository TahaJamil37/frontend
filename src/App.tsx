import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchItems } from './redux/itemsSlice';
import ItemsTable from './components/ItemsTable';
import DetailsTabs from './components/DetailsTabs';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div>
      <h1>Item Viewer</h1>
      <ItemsTable />
      <DetailsTabs />
    </div>
  );
};

export default App;
