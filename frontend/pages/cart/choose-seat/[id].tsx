import Layout from '../../../components/cart/layout';
import TicketIcon from '../../../public/icons/ticket.svg';

const seats = Array.from({ length: 120 }, (_, idx) => idx + 1);

export const ChooseSeat = () => {
    return (
        <Layout>
            <div className='cart__header cart__header--choose-seat'>
                <div className='cart__header-top'>
                    <h4 className='cart__subtitle'>Выбор мест</h4>
                    {/* <button className='cart__control-btn link-effect'> */}
                    {/*     <span>Билеты</span> */}
                    {/*     <TicketIcon /> */}
                    {/* </button> */}
                </div>
                <ul className='cart__legend'>
                    <li className='cart__legend-item'>свободное место</li>
                    <li className='cart__legend-item'>занятное место</li>
                    <li className='cart__legend-item'>выбранное место</li>
                </ul>
            </div>
            <div className='seats'>
                <div className='seats__items'>
                    {seats.map((s) => (
                        <span className='seats__item' key={s}>
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ChooseSeat;
