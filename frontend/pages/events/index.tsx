// @ts-nocheck
import type { NextPage } from 'next';
import Search from '../../public/icons/search.svg';
import Event from '../../components/events/event';
import Filter from '../../components/events/filter';
import { filters, events } from '../../shared/dummyData';

const Events: NextPage = () => {
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
                        {filters.map(({ ...props }) => (
                            <Filter key={props.name} {...props} />
                        ))}
                        <p className='events-filter__all'>Всего: 250</p>
                    </div>
                </div>
            </div>
            <div className='events'>
                <div className='events__wrapper'>
                    <div className='events__container container'>
                        {events.map(({...props}) => (
                            <Event key={props.id} {...props} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;
