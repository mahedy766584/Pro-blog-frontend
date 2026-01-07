import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TTheme = "light" | "dark";
const KEY = "proBlog_theme";

const initialState = {
    theme: (localStorage.getItem(KEY) as TTheme) || "light",
};

const themeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<TTheme>) => {
            state.theme = action.payload;
            localStorage.setItem(KEY, action.payload);
        },
        toggleTheme: (state) =>{
            state.theme = state.theme === "light" ? "dark" : "light";
            localStorage.setItem(KEY, state.theme);
        }
    }
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;