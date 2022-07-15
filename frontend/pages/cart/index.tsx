// @ts-nocheck
import type { NextPage } from 'next';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { resetTickets } from '../../features/user/userSlice';
import Ticket from '../../components/cart/ticket';
import TrashIcon from '../../public/icons/trash.svg';
import FilterIcon from '../../public/icons/filter.svg';
import Layout from '../../components/cart/layout';
import Empty from '../../components/cart/empty';

const Cart: NextPage = () => {
    const { tickets } = useAppSelector((state) => state.user.cart);
    const ticketsPaid = tickets.filter((t) => t.isPaid);
    const ticketsNotPaid = tickets.filter((t) => !t.isPaid);

    const dispatch = useAppDispatch();

    function handleResetCart() {
        dispatch(resetTickets());
    }

    return (
        <Layout>
            {ticketsNotPaid.length ? (
                <>
                    <div className='cart__header'>
                        <h4 className='cart__subtitle'>Ожидают оплаты</h4>
                        <button
                            className='cart__control-btn link-effect'
                            onClick={handleResetCart}
                        >
                            <span>Очисить корзину</span>
                            <TrashIcon />
                        </button>
                    </div>
                    <div className='tickets'>
                        <div className='tickets__wrapper'>
                            {ticketsNotPaid.map(({ ...props }) => (
                                <Ticket key={props.id} {...props} />
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <Empty />
            )}
            {!!ticketsPaid.length && (
                <>
                    <div className='cart__header'>
                        <h4 className='cart__subtitle'>Оплаченные билеты</h4>
                        <button className='cart__control-btn link-effect'>
                            <span>Сортировать по дате</span>
                            <FilterIcon />
                        </button>
                    </div>
                    <div className='tickets'>
                        <div className='tickets__wrapper'>
                            {ticketsPaid.map(({ ...props }) => (
                                <Ticket key={props.id} {...props} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </Layout>
    );
};

export default Cart;
