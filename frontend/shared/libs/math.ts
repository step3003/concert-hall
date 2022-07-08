export const formatDate: any = (date = new Date()) => {
    if (date === null) {
        return new Date().toISOString().split('T')[0];
    }

    return date.toISOString().split('T')[0];
};

export const convertDate = (stringDate: string): string => {
    const date = new Date(stringDate).toISOString();
    const [year, month, day] = date.substring(0, 10).split('-');
    const time = date.substring(11, 16);
    return `${day}/${month}/${year} - ${time}`;
};
