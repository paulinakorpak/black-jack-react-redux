import { createSlice } from '@reduxjs/toolkit';
import { PAGE_GAME, PAGE_WELCOME } from './pages';

const initialState = {
  page: PAGE_WELCOME,
  account: 1000,
  stake: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.page = PAGE_GAME;
    },
    raiseStake: (state, action) => {
      state.stake += action.payload;
      state.account -= action.payload;
    },
  },
});

export const { startGame, raiseStake } = gameSlice.actions;

export const selectPage = (state) => state.game.page;
export const selectAccount = (state) => state.game.account;
export const selectStake = (state) => state.game.stake;

export default gameSlice.reducer;
