import { createSlice } from "@reduxjs/toolkit";

// Function to load the authentication state from localStorage
const loadAuthState = () => {
  try {
    const serializedState = localStorage.getItem("authState");
    if (serializedState === null) {
      return {
        isAuthenticated: false,
        user: null,
        token: null,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      isAuthenticated: false,
      user: null,
      token: null,
    };
  }
};

// Function to save the authentication state to localStorage
const saveAuthState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("authState", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadAuthState(),
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      saveAuthState(state);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      saveAuthState(state);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
