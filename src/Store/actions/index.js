import { commonActions } from "../../Constants/storeConstants"

export const setLoader = (data) => ({
    type: commonActions.LOADER,
    payLoad: data
});