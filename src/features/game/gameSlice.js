import { createSlice } from '@reduxjs/toolkit';
import { PAGE_GAME, PAGE_WELCOME } from './pages';
import {
  PHASE_BET, PHASE_DEALER_TURN, PHASE_RESULTS, PHASE_USER_TURN,
} from './phases';
import { PLAYER_USER, PLAYER_DEALER } from './players';
import allCards from './cards';
import { ACE_HIGH_VALUE, ACE_LOW_VALUE, BLACK_JACK_VALUE } from './values';

const initialState = {
  page: PAGE_WELCOME,
  phase: PHASE_BET,
  account: 1000,
  stake: 0,
  cards: allCards,
  userCards: [],
  dealerCards: [],
  result: null,
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
    drawCard: (state, action) => {
      const cardIndex = Math.floor(Math.random() * state.cards.length);
      const card = state.cards[cardIndex];
      state.cards.splice(cardIndex, 1);

      if (action.payload === PLAYER_USER) {
        state.userCards = [...state.userCards, card];
      }
      if (action.payload === PLAYER_DEALER) {
        state.dealerCards = [...state.dealerCards, card];
      }
    },
    stand: (state) => {
      state.phase = PHASE_DEALER_TURN;
    },
    setResult: (state, action) => {
      state.result = action.payload;
      state.phase = PHASE_RESULTS;
    },
  },
});

export const {
  startGame, raiseStake, deal, drawCard, stand, setResult,
} = gameSlice.actions;

const countPoints = (cards) => {
  let points = cards.reduce((sum, add) => sum + add.value, 0);
  const hasAce = cards.some((card) => card.value === ACE_LOW_VALUE);

  if (hasAce) {
    const aceValuesDiff = ACE_HIGH_VALUE - ACE_LOW_VALUE;
    const aceThreshold = BLACK_JACK_VALUE - aceValuesDiff;

    if (points <= aceThreshold) {
      points += aceValuesDiff;
    }
  }

  return points;
};

export const selectPage = (state) => state.game.page;
export const selectPhase = (state) => state.game.phase;
export const selectAccount = (state) => state.game.account;
export const selectStake = (state) => state.game.stake;
export const selectUserCards = (state) => state.game.userCards;
export const selectDealerCards = (state) => state.game.dealerCards;
export const selectUserPoints = (state) => countPoints(state.game.userCards);
export const selectDealerPoints = (state) => countPoints(state.game.dealerCards);
export const selectResult = (state) => state.game.result;

export default gameSlice.reducer;
