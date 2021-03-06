import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "channel",
  initialState: {
    channelId: null,
    channelName: null,
  },

  reducers: {
    setChannel: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannel } = slice.actions;
export const selectChannelName = (state) => state.channel.channelName;
export const selectChannelId = (state) => state.channel.channelId;
export default slice.reducer;
