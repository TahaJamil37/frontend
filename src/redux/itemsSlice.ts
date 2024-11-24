import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Item, ItemDetails } from '../types/Item';

interface ItemsState {
  items: Item[];
  selectedItemDetails: ItemDetails | null;
  loading: boolean;
  error: string | null;
}

const initialState: ItemsState = {
  items: [],
  selectedItemDetails: null,
  loading: false,
  error: null,
};

// Fetch items
export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await axios.get('/items');
  return response.data;
});

// Fetch details for a specific item
export const fetchItemDetails = createAsyncThunk(
  'items/fetchItemDetails',
  async (guid: string) => {
    const response = await axios.get(`/properties/${guid}`);
    return response?.data;
  }
);

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching items';
      })
      .addCase(fetchItemDetails.fulfilled, (state, action) => {
        state.selectedItemDetails = action.payload;
      });
  },
});

export default itemsSlice.reducer;
