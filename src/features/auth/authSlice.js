// src/features/counter/counterSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, checkUser, signOut } from "./authAPI";
import { updateUser } from "../user/userAPI";

const initialState = {
  loggedInUser: null, // this is the user object, which is used to store the user data. both for login(fulfilled) and signup(fulfilled). this should only contain the identity information
  status: "idle",
  error: null,
};

// code for creating a new user
export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);

// code for checking user login credentials
export const checkUserAsync = createAsyncThunk(
  "user/checkUser",
  async (loginInfo, {rejectWithValue}) => {
    try{
      const response = await checkUser(loginInfo);
      return response.data;
        
    }catch(error){
      return rejectWithValue(error)
    }
  }
);

// export const updateUserAsync = createAsyncThunk(
//   "user/updateUser",
//   async (update) => {
//     const response = await updateUser(update);
//     return response.data;
//   }
// );
export const signOutAsync = createAsyncThunk(
  "user/signOut",
  async (loginInfo) => {
    const response = await signOut(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// Create a slice for the counter state
const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Increment the counter
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser += action.payload;
      })
      .addCase(createUserAsync.rejected, (state) => {
        state.status = "error";
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
        // console.log("error")
      })
      // ******************the below updateUserAsync is commented out so that the use*******************
      // .addCase(updateUserAsync.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(updateUserAsync.fulfilled, (state, action) => {
      //   state.status = "idle";
      //   state.loggedInUser = action.payload;
      // })
      .addCase(signOutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = null;
      });
  },
});

// Export actions so they can be dispatched
export const { increment } = authSlice.actions;

// export const selectLoggedInUser = (state) => state.user.loggedInUser; // this throws an error, auth of the store should be mentioned
export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state.auth.error;

// export const selectCount = (state) => state.counter.value;

// Export the reducer to be used in the store
export default authSlice.reducer;
