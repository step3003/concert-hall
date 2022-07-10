import type { NextPage } from 'next';
import Ticket from '../../components/cart/ticket';
import TrashIcon from '../../public/icons/trash.svg';
import FilterIcon from '../../public/icons/filter.svg';
import Layout from '../../components/cart/layout';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { resetTickets } from '../../features/user/userSlice';

const Cart: NextPage = () => {
    const { tickets } = useAppSelector((state) => state.user.cart);
    const dispatch = useAppDispatch();

    function handleResetCart() {
        dispatch(resetTickets());
    }

    return (
        <Layout isMain>
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
                    {tickets.map(({ ...props }) => (
                        <Ticket key={props.id} {...props} />
                    ))}
                </div>
            </div>
            <div className='cart__header'>
                <h4 className='cart__subtitle'>Оплаченные билеты</h4>
                <button className='cart__control-btn link-effect'>
                    <span>Сортировать по дате</span>
                    <FilterIcon />
                </button>
            </div>
            <div className='tickets'>
                <div className='tickets__wrapper'>
                    {tickets
                        .filter((t) => t.isPaid)
                        .map(({ ...props }) => (
                            <Ticket key={props.id} {...props} />
                        ))}
                </div>
            </div>
        </Layout>
    );
};

export default Cart;