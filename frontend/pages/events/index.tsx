import React from 'react';
import Layout from '../../components/layout';
import Search from '../../public/icons/search.svg';
import Chevron from '../../public/icons/chevron.svg';
import Image from 'next/image';

const Events: React.FC = () => {
    const events = ['1', '2', '3', '4', '5', '6'];

    return (
        <Layout>
            <div className='events-main'>
                <form className='events-main__search-form'>
                    <label htmlFor='search' hidden>
                        Поиск
                    </label>
                    <input
                        className='events-main__input'
                        id='search'
                        type='text'
                        placeholder='Поиск мероприятй'
                    />
                    <button
                        className='events-main__btn icon--solid'
                        type='submit'
                    >
                        <Search />
                    </button>
                </form>
            </div>
            <div className='events-filter'>
                <div className='events-filter__wrapper'>
                    <div className='events-filter__container container'>
                        <div className='event-filter'>
                            <h4 className='event-filter__title'>
                                Тип мероприятия
                                <span className='event-filter__icon icon--solid'>
                                    <Chevron />
                                </span>
                            </h4>
                        </div>
                        <div className='event-filter'>
                            <h4 className='event-filter__title'>
                                Жанр
                                <span className='event-filter__icon icon--solid'>
                                    <Chevron />
                                </span>
                            </h4>
                        </div>
                        <div className='event-filter'>
                            <h4 className='event-filter__title'>
                                Инструмент
                                <span className='event-filter__icon icon--solid'>
                                    <Chevron />
                                </span>
                            </h4>
                        </div>
                        <div className='event-filter'>
                            <h4 className='event-filter__title'>
                                Дата
                                <span className='event-filter__icon icon--solid'>
                                    <Chevron />
                                </span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='events'>
                <div className='container'>
                    {events.map((path) => (
                        <div className='event'>
                            <div className='event__title-date'>
                                <h3 className='event__title'>
                                    Вольфганг Амадей Моцарт - Реквием
                                </h3>
                                <p className='event__date'>
                                    20/12/2022 - 19:00
                                </p>
                            </div>
                            <div className='event__image-wrapper'>
                                <Image
                                    src='/iamges/event-1.png'
                                    layout='responsive'
                                    width='100'
                                    height='100'
                                />
                            </div>
                            <div className='event__about'>
                                <p className='event__desc'></p>
                                <div className='event__price-control'>
                                    <p className='event__price'>15 руб</p>
                                    <div className='event__control'>
                                        <button className='btn btn--outline-brown'>
                                            Подробнее
                                        </button>
                                        <button className='btn'>
                                            Купить билет
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Events;
