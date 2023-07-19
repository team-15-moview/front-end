import { createSlice } from "@reduxjs/toolkit";

const userTokenSlice = createSlice({
  name: "userToken",
  initialState: { hasToken: false, nickname: ''},
  reducers: {
    setUserToken: (state,{payload}) => {
      return {hasToken: true, nickname: payload}
    },
    clearUserToken: (state) => {
      return {hasToken: false, nickname: ''}
    },
  },
});

export const { setUserToken, clearUserToken } = userTokenSlice.actions;
export default userTokenSlice.reducer;
