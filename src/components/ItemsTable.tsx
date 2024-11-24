import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchItemDetails } from '../redux/itemsSlice';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const ItemsTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  // Dummy data for demonstration
  const dummyItems = [
    { guid: 'guid1', name: 'Item 1', path: 'path1/path2' },
    { guid: 'guid2', name: 'Item 2', path: 'path3/path4' },
    { guid: 'guid3', name: 'Item 3', path: 'path5/path6' },
  ];

  // Replace the below line with your Redux state when integrated
  const { items } = useSelector((state: RootState) => state.items || { items: dummyItems });

  const handleRowClick = (guid: string) => {
    console.log('Row clicked with GUID:', guid);
    dispatch(fetchItemDetails(guid));
  };

  return (
    <TableContainer component={Paper} elevation={3} sx={{ maxWidth: 800, margin: '20px auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>GUID</strong></TableCell>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Path</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyItems.map((item) => (
            <TableRow
              key={item.guid}
              hover
              onClick={() => handleRowClick(item.guid)}
              sx={{ cursor: 'pointer' }}
            >
              <TableCell>{item.guid}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.path}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemsTable;
