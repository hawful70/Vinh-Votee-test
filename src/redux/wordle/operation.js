import { WordleService } from 'services';
import { WordleActions } from './action';
import { toast } from "utilities";

export const guessRandom = (guess, seed, size) => async (dispatch) => {
  try {
    dispatch({ type: WordleActions.GUESS_RANDOM_REQUEST });
    const result = await WordleService.guessRandom(guess, seed, size);
    dispatch({
      type: WordleActions.GUESS_RANDOM_SUCCESS,
      payload: { data: result },
    });
  } catch (error) {
    const message = error.response.data;
    toast('error', '', message);
    dispatch({ type: WordleActions.GUESS_RANDOM_ERROR, error });
  }
};
