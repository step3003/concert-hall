import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenModal: false,
    isSignIn: false,
    isSignUp: false,
    isSearch: false,
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setIsOpenModal: (state, action) => {
            state.isOpenModal = action.payload;
        },
        signIn: (state) => {
            state.isOpenModal = true;
            state.isSignIn = true;
            state.isSignUp = false;
        },
        signUp: (state) => {
            state.isOpenModal = true;
            state.isSignIn = false;
            state.isSignUp = true;
        },
        resetSign: (state) => {
            state.isOpenModal = false;
            state.isSignIn = false;
            state.isSignUp = false;
        },
        setIsSearch: (state, action) => {
            state.isSearch = action.payload;
        },
    },
});

export const { setIsOpenModal, signIn, signUp, resetSign, setIsSearch } =
    commonSlice.actions;
export default commonSlice.reducer;
