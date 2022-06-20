import type { NextPage } from 'next';
import Image from 'next/image';
import TrashIcon from '../../public/icons/trash.svg';

const dummyData = Array.from({ length: 4 }, (_, idx) => `${idx + 1}`);
console.log(dummyData);

const Cart: NextPage = () => {
    return (
        <div className='cart'>
            <div className='cart__wrapper'>
                <div className='container'>
                    <h3 className='title'>Корзина</h3>
                    <div className='cart__header'>
                        <h4 className='cart__subtitle'>Ожидают оплаты</h4>
                        <button className='cart__control-btn link-effect'>
                            <span>Очисить корзину</span>
                            <TrashIcon />
                        </button>
                    </div>
                    <div className='tickets'>
                        <div className='tickets__wrapper'>
                            {dummyData.map((path) => (
                                <div className='ticket' key={path}>
                                    <div className='ticket__img'>
                                        <Image
                                            src={`/images/grid-${path}.png`}
                                            width={100}
                                            height={100}
                                            layout='responsive'
                                            objectFit='cover'
                                            objectPosition='center'
                                        />
                                    </div>
                                    <div className='ticket__content'>
                                        <h4 className='ticket__title'>
                                            От Баха до джаза. Концерт для
                                            четырех саксофонов и органа
                                        </h4>
                                        <div className='ticket__date-btn'>
                                            <p className='ticket__date'>
                                                20/12/2022 - 19:00
                                            </p>
                                            <button className='ticket__btn text-underline'>
                                                Выбрать местa
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
