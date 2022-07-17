// @ts-nocheck
import type { NextPage } from 'next';
import { useAppSelector, useAppDispatch, useSSR } from '../../app/hooks';
import { resetTickets } from '../../features/user/userSlice';
import Ticket from '../../components/cart/ticket';
import TrashIcon from '../../public/icons/trash.svg';
import FilterIcon from '../../public/icons/filter.svg';
import Layout from '../../components/cart/layout';
import Empty from '../../components/cart/empty';
import ButtonIcon from '../../components/buttonIcon';

const Cart: NextPage = () => {
    const SSR = useSSR();
    const { tickets } = useAppSelector((state) => state.user.cart);
    const ticketsPaid = tickets.filter((t) => t.isPaid);
    const ticketsNotPaid = tickets.filter((t) => !t.isPaid);

    const dispatch = useAppDispatch();

    function handleResetCart() {
        dispatch(resetTickets());
    }

    return (
        <Layout>
            {!SSR && ticketsNotPaid.length ? (
                <>
                    <div className='cart__header'>
                        <h4 className='cart__subtitle'>Ожидают оплаты</h4>
                        <ButtonIcon
                            icon={<TrashIcon />}
                            onClick={handleResetCart}
                        >
                            Очистить корзину
                        </ButtonIcon>
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
                        <ButtonIcon icon={<FilterIcon />}>
                            Сортировать по дате
                        </ButtonIcon>
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
