 // @ts-nocheck
import React from 'react';
import Search from '../../public/icons/search.svg';
import Event from '../../components/events/event';
import Filter from '../../components/events/filter';

const dummyData = {
    events: ['1', '2', '3', '4', '5', '6'],
    filters: [
        {
            title: 'Тип мероприятия',
            filters: [
                { name: 'Студенческие спектакли', count: 2, id: 'study' },
                { name: 'Семейные мероприятия', count: 8, id: 'fmaily' },
                { name: 'Бесплатные мероприятия', count: 3, id: 'free' },
            ],
        },
        {
            title: 'Жанр',
            filters: [
                { name: 'Классика', count: 2, id: 'classica' },
                { name: 'Джаз', count: 8, id: 'jazz' },
                { name: 'Блюз', count: 3, id: 'bluze' },
            ],
        },
        {
            title: 'Инструмент',
            filters: [
                { name: 'Студенческие спектакли', count: 2, id: 'study' },
                { name: 'Семейные мероприятия', count: 8, id: 'fmaily' },
                { name: 'Бесплатные мероприятия', count: 3, id: 'free' },
            ],
        },
        {
            title: 'Дата',
        },
    ],
};

const Events: React.FC = () => {
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
                        {dummyData.filters.map(({ ...props }) => (
                            <Filter key={props.name} {...props} />
                        ))}
                        <p className='events-filter__all'>Всего: 250</p>
                    </div>
                </div>
            </div>
            <div className='events'>
                <div className='events__wrapper'>
                    <div className='events__container container'>
                        {dummyData.events.map((path) => (
                            <Event key={path} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;
