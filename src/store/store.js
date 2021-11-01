import { configureStore } from "@reduxjs/toolkit";
import meetupReducer from "../feature/meetupSlice";

const store = configureStore({
  reducer: {
    meetups: meetupReducer
  }
});

export default store;
