import { commonActions } from '../../Constants/storeConstants';

export const setLoader = (data) => ({
  type: commonActions.LOADER,
  payLoad: data,
});

export const setSnackBarOptions = (data) => ({
  type: commonActions.SHOW_SNACK_BAR,
  payLoad: data,
});
