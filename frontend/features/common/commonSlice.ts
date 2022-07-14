import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSignIn: false,
    isSignUp: false,
    isSearch: false,
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        signIn: (state) => {
            state.isSignIn = true;
            state.isSignUp = false;
        },
        signUp: (state) => {
            state.isSignIn = false;
            state.isSignUp = true;
        },
        resetSign: (state) => {
            state.isSignIn = false;
            state.isSignUp = false;
        },
        setIsSearch: (state, action) => {
            state.isSearch = action.payload;
        },
    },
});

export const { signIn, signUp, resetSign, setIsSearch } = commonSlice.actions;
export default commonSlice.reducer;
