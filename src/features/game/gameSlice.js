import { createSlice } from '@reduxjs/toolkit';
import { PAGE_GAME, PAGE_WELCOME } from './pages';
import { PHASE_BET, PHASE_USER_TURN } from './phases';

const initialState = {
  page: PAGE_WELCOME,
  phase: PHASE_BET,
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
    deal: (state) => {
      state.phase = PHASE_USER_TURN;
    },
  },
});

export const { startGame, raiseStake, deal } = gameSlice.actions;

export const selectPage = (state) => state.game.page;
export const selectPhase = (state) => state.game.phase;
export const selectAccount = (state) => state.game.account;
export const selectStake = (state) => state.game.stake;

export default gameSlice.reducer;
