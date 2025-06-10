import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  darkMode: boolean;
};

const savedTheme = localStorage.getItem("darkMode") === "true";

const initialState: ThemeState = {
  darkMode: savedTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode.toString());
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
