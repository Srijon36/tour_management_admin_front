import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../store/Api";

// ================= LOGIN THUNK =================
export const login = createAsyncThunk(
  "auth/login",
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post("/logins/create-login", userInput);

      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response?.data || "Login failed");
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);

// ================= INITIAL STATE =================
const initialState = {
  loading: false,
  error: null,
  token: null,
};

// ================= SLICE =================
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload?.token;

        sessionStorage.setItem(
          "tour_token",
          JSON.stringify({ token: action.payload?.token })
        );
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default AuthSlice.reducer;