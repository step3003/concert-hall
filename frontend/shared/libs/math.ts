export const formatDate: any = (date = new Date()) => {
    if (date === null) {
        return new Date().toISOString().split('T')[0];
    }

    return date.toISOString().split('T')[0];
};

export const convertDate = (stringDate: string): string => {
    const date = new Date(stringDate);
    const [year, month, day] = date.toISOString().substring(0, 10).split('-');
    return `${day}/${month}/${year}`;
};
