export const formatDate: any = (date = new Date()) => {
    if (date === null) {
        return new Date().toISOString().split('T')[0]
    }

    return date.toISOString().split('T')[0];
};

