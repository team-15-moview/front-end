import { createSlice } from "@reduxjs/toolkit";

const userTokenSlice = createSlice({
  name: "userToken",
  initialState: { hasToken: false },
  reducers: {
    setUserToken: (state) => {
      state.hasToken = true; // 상태를 토글
    },
    clearUserToken: (state) => {
      state.hasToken = false; // 토큰 값을 false로 설정
    },
  },
});

export const { setUserToken, clearUserToken } = userTokenSlice.actions;
export default userTokenSlice.reducer;
