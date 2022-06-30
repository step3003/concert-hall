export interface IEvent {
    id: number;
    title: string;
    description: string;
    slug: string;
    event_date_at: string;
    is_free?: boolean;
    duration: string;
    types?: string[];
    price: string;
    preview_image: null | string;
}

export interface IFilter {
    title: 'Тип мероприятия' | 'Жанр' | 'Инструмент' | 'Дата';
    isDate: 'boolean';
    filters: [
        {
            name: 'string';
            count: 'number';
            id: 'string';
        }
    ];
}
