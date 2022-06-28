export interface IEvent {
    id: number;
    title: string;
    description: string;
    slug: string;
    event_date_at: string;
    is_free?: boolean;
    duration: string;
    types: string;
    price: string;
    preview_image: null | string;
}
