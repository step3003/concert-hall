import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState, ITicket, IUser } from '../../types/cart';

const LS = {
    user: null,
    tickets: [],
};

if (typeof window !== 'undefined') {
    LS.user = JSON.parse(String(localStorage.getItem('user')));
    LS.tickets = JSON.parse(String(localStorage.getItem('tickets')));
}

const initialState: IUserState = {
    user: LS.user || null,
    cart: {
        tickets: LS.tickets || [],
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
            localStorage.setItem('tickets', JSON.stringify(state.cart.tickets));
        },
        removeTicket(state, action: PayloadAction<number>) {
            state.cart.tickets = state.cart.tickets.filter(
                (ticket) => ticket.id !== action.payload
            );
            state.cart.tickets.length
                ? localStorage.setItem(
                      'tickets',
                      JSON.stringify(state.cart.tickets)
                  )
                : localStorage.removeItem('tickets');
        },
        resetTickets(state) {
            state.cart.tickets = state.cart.tickets.filter(
                (ticket) => ticket.isPaid
            );
            localStorage.removeItem('tickets');
        },
    },
});

export const { setUser, resetUser, addTicket, removeTicket, resetTickets } =
    userSlice.actions;
export default userSlice.reducer;
