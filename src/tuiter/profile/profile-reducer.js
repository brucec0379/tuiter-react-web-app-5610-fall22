import { createSlice } from '@reduxjs/toolkit';

const currentUser = {
  firstName: 'Chenghai',
  lastName: 'Cao',
  handle: '@Cc',
  profilePicture: 'spacex.png',
  bannerPicture: 'img.png',
  bio: 'Student in Northeastern in Computer Science.',
  website: 'https://github.com/brucec0379/',
  location: 'Boston, MA',
  dateOfBirth: '3/11/1907',
  dateJoined: '2/2019',
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