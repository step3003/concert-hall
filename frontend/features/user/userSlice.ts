import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState, ITicket } from '../../types/cart';

const initialState: IUserState = {
    cart: {
        tickets: [],
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
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

export const { addTicket, removeTicket, resetTickets } = userSlice.actions;
export default userSlice.reducer;
