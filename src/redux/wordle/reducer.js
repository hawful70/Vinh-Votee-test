import { produce } from 'immer';
import { WordleActions } from './action';

export const initialState = {
  list: {
    data: [],
    isLoading: false,
  },
};

export const wordleReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case WordleActions.GUESS_RANDOM_REQUEST:
        draft.list.isLoading = true;
        break;

      case WordleActions.GUESS_RANDOM_SUCCESS: {
        const {
          payload: { data },
        } = action;
        draft.list.isLoading = false;
        draft.list.data = data;
        break;
      }

      case WordleActions.GUESS_RANDOM_ERROR:
        draft.list.isLoading = false;
        break;

      default:
        return state;
    }
  });
