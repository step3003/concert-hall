import React from 'react';
import Search from '../../public/icons/search.svg';
import Chevron from '../../public/icons/chevron.svg';
import Event from '../../components/events/event';

const Events: React.FC = () => {
    const events = ['1', '2', '3', '4', '5', '6'];

    return (
        <>
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
                        <div className='event-filter '>
                            <h4 className='event-filter__title'>
                                Тип мероприятия
                                <span className='event-filter__icon icon--solid'>
                                    <Chevron />
                                </span>
                            </h4>
                            <div className='event-filter__splash'>
                                <ul className='event-filter__list'>
                                    <li>
                                        <input type='checkbox' id='study' />
                                        <label for='study'>
                                            Студенческие спектакли (2)
                                        </label>
                                    </li>
                                    <li>
                                        <input type='checkbox' id='family' />
                                        <label for='family'>
                                            Семейные мероприятия (8)
                                        </label>
                                    </li>
                                    <li>
                                        <input type='checkbox' id='free' />
                                        <label for='free'>
                                            Бесплатные мероприятия (3)
                                        </label>
                                    </li>
                                </ul>
                                <button className='event-filter__reset-btn text-underline'>
                                    Очистить фильтр
                                </button>
                            </div>
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
                        <p className='events-filter__all'>Всего: 250</p>
                    </div>
                </div>
            </div>
            <div className='events'>
                <div className='events__wrapper'>
                    <div className='events__container container'>
                        {events.map((path) => (
                            <Event key={path} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;
