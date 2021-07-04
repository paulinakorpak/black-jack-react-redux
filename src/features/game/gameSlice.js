import { createSlice } from '@reduxjs/toolkit';
import { PAGE_GAME, PAGE_WELCOME } from './pages';

const initialState = {
  page: PAGE_WELCOME,
  account: 1000,
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

export const selectPage = (state) => state.game.page;
export const selectAccount = (state) => state.game.account;

export default gameSlice.reducer;
