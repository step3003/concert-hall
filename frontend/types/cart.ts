export interface ITicket {
    id: number;
    title: string;
    price: string;
    event_date_at: string;
    preview_image: null | string;
    isPaid: boolean;
    payInfo: null | {
        totalPrice: number;
        seats: number[];
        date: null;
    };
}

export interface IUser {
    id: number;
    email: string;
    name: string;
    last_name: string;
    token: string;
}

export interface IUserState {
    user: IUser | null;
    cart: {
        tickets: ITicket[];
    };
}
