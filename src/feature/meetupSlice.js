import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  meetupList: [
    {
      id: "m1",
      title: "This is a first meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      address: "Meetupstreet 5, 12345 Meetup City",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
    },
    {
      id: "m2",
      title: "This is a second meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      address: "Meetupstreet 5, 12345 Meetup City",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
    }
  ],
  favorites: 0
};

const meetupSlice = createSlice({
  name: "meetups",
  initialState: INITIAL_STATE,
  reducers: {
    addMeetup: (state, action) => {
      state.meetupList = [...state.meetupList, action.payload];
    }
  }
});

const meetupReducer = meetupSlice.reducer;
export const { addMeetup } = meetupSlice.actions;
export default meetupReducer;
