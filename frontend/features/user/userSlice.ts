import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState, ITicket, IUser } from '../../types/cart';

const user =
    typeof window !== 'undefined'
        ? // @ts-ignore
          JSON.parse(localStorage.getItem('user'))
        : null;

const initialState: IUserState = {
    user: user || null,
    cart: {
        tickets: [],
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
        },
        resetUser(state) {
            state.user = null;
            localStorage.removeItem('user');
        },
        addTicket(state, action: PayloadAction<ITicket>) {
            state.cart.tickets.push(action.payload);
        },
        removeTicket(state, action: PayloadAction<number>) {
            state.cart.tickets = state.cart.tickets.filter(
                (ticket) => ticket.id !== action.payload
            );
        },
        resetTickets(state) {
            state.cart.tickets = state.cart.tickets.filter(
                (ticket) => ticket.isPaid
            );
        },
    },
});

export const { setUser, resetUser, addTicket, removeTicket, resetTickets } =
    userSlice.actions;
export default userSlice.reducer;
