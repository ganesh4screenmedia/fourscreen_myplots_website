/* eslint-disable default-param-last */
import { commonActions } from '../../Constants/storeConstants';

const initialState = {
  loader: false,
  snackBarOptions: {},
};

export const common = (state = initialState, actions) => {
  switch (actions?.type) {
    case commonActions.LOADER: {
      return { ...state, loader: actions.payLoad };
    }
    case commonActions.SHOW_SNACK_BAR: {
      return { ...state, snackBarOptions: actions.payLoad };
    }
    default:
      return state;
  }
};
