import type { NextPage } from 'next';
import Ticket from '../../components/cart/ticket';
import TrashIcon from '../../public/icons/trash.svg';
import FilterIcon from '../../public/icons/filter.svg';
import Layout from '../../components/cart/layout';
import { ticketsWaitingPay, ticketsPaid } from '../../shared/dummyData';

const Cart: NextPage = () => {
    return (
        <Layout>
            <div className='cart__header'>
                <h4 className='cart__subtitle'>Ожидают оплаты</h4>
                <button className='cart__control-btn link-effect'>
                    <span>Очисить корзину</span>
                    <TrashIcon />
                </button>
            </div>
            <div className='tickets'>
                <div className='tickets__wrapper'>
                    {ticketsWaitingPay.map(({ imgSrc, title, info, id }) => {
                        return (
                            <Ticket
                                key={id}
                                imgSrc={imgSrc}
                                title={title}
                                info={info}
                                id={id}
                            />
                        );
                    })}
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
                    {ticketsPaid.map(({ imgSrc, title, info, id }) => {
                        return (
                            <Ticket key={id} imgSrc={imgSrc} title={title} info={info} />
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
