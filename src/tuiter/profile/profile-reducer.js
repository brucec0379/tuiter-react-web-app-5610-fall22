import { createSlice } from '@reduxjs/toolkit';

const currentUser = {
  firstName: 'Jose',
  lastName: 'Annunziato',
  handle: '@jannunzi',
  profilePicture: 'spacex.png',
  bannerPicture: 'img.png',
  bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
  website: 'youtube.com/webdevtv',
  location: 'Boston, MA',
  dateOfBirth: '7/7/1968',
  dateJoined: '4/2009',
  followingCount: 340,
  followersCount: 223
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: currentUser,
  reducers: {
    updateUser (state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.bio = action.payload.bio;
      state.website = action.payload.website;
      state.location = action.payload.location;
      state.dateOfBirth = action.payload.dateOfBirth;
    }
  }
});

export const { updateUser } = profileSlice.actions;
export default profileSlice.reducer;