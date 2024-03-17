import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
  const apiUrl = 'https://api.unsplash.com/photos/?client_id=Yt1PhupnxkrOj5rzkcah0P_21LxjtXsuI8rxqEq9jHg&orientation=squarish&per_page=1000';
  const data = await fetch(apiUrl);
  return data.json();
});



const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });

  },
});

export default todoSlice.reducer;
