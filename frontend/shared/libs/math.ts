export const formatDate: any = (date = new Date()) => {
    if (date === null) {
        return new Date().toISOString().split('T')[0];
    }

    return date.toISOString().split('T')[0];
};

// export const createHallSide = (
//     fromSeat: number,
//     totalRow: number,
//     seatsInRow: number
// ) => {
//     const side = [];
//
//     for (
//         let i = fromSeat >= seatsInRow ? seatsInRow + 1 : fromSeat;
//         i <= totalRow * seatsInRow;
//         i++
//     ) {
//         side.push(i.toString());
//         if (!(i % seatsInRow)) {
//             i += seatsInRow;
//         }
//     }
//
//     return side;
// };
