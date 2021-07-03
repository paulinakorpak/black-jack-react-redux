import { createSlice } from '@reduxjs/toolkit';
import { PAGE_GAME, PAGE_WELCOME } from './pages';

const initialState = {
  page: PAGE_WELCOME,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.page = PAGE_GAME;
    },
  },
});

export const { startGame } = gameSlice.actions;

export default gameSlice.reducer;
