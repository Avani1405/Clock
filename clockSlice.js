import { createSlice } from '@reduxjs/toolkit';

const getCurrentTime = () => new Date().toLocaleTimeString();

const clockSlice = createSlice({
  name: 'clock',
  initialState: {
    time: getCurrentTime(),
  },
  reducers: {
    updateTime: (state) => {
      state.time = getCurrentTime();
    }
  }
});

export const { updateTime } = clockSlice.actions;
export default clockSlice.reducer;
