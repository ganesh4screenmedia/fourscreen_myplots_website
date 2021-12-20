import { commonActions } from '../../Constants/storeConstants';

const initialState = {
  loader: false,
};

// eslint-disable-next-line default-param-last
export const common = (state = initialState, actions) => {
  switch (actions?.type) {
    case commonActions.LOADER: {
      return { ...state, loader: actions.payLoad };
    }
    default:
      return state;
  }
};
