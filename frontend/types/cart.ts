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

export interface IUserState {
    cart: {
        tickets: ITicket[];
    };
}
