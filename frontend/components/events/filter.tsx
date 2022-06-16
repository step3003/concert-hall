import React, { useState, useEffect } from 'react';
import Chevron from '../../public/icons/chevron.svg';
import { formatDate } from '../../shared/libs/math';

type Props = {
    title: 'Тип мероприятия' | 'Жанр' | 'Инструмент' | 'Дата';
    isDate: 'boolean';
    filters: [
        {
            name: 'string';
            count: 'number';
            id: 'string';
        }
    ];
};

export const Filter: React.FC<Props> = ({ title, filters }) => {
    const [checked, setChecked] = useState({});
    const [date, setDate] = useState({ from: formatDate(), to: formatDate() });

    // useEffect(() => {
    //     console.log(checked);
    // }, [checked]);

    function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
        setChecked((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.checked,
        }));
    }

    function handleDate(e: React.ChangeEvent<HTMLInputElement>) {
        setDate((prevState) => ({
            ...prevState,
            [e.target.id]: formatDate(e.target.valueAsDate),
        }));
    }

    function handleResetForm() {
        const checkedClean: any = {};

        for (let key in checked) {
            checkedClean[key] = false;
        }

        setChecked(checkedClean);
        setDate({ from: formatDate(), to: formatDate() });
    }

    function renderFilter() {
        if (title == 'Дата') {
            return (
                <div className='event-filter__date'>
                    <div className='event-filter__date-field'>
                        <label htmlFor='from'>С</label>
                        <input
                            className='event-filter__input-date input'
                            type='date'
                            id='from'
                            value={date.from}
                            onChange={handleDate}
                        />
                    </div>
                    <div className='event-filter__date-field'>
                        <label htmlFor='to'>По</label>
                        <input
                            className='event-filter__input-date input'
                            id='to'
                            type='date'
                            value={date.to}
                            onChange={handleDate}
                        />
                    </div>
                </div>
            );
        } else {
            return filters.map(({ name, count, id }) => (
                <label key={id} className='checkbox'>
                    <input
                        className='checkbox__input'
                        type='checkbox'
                        onChange={handleCheckbox}
                        // @ts-ignore
                        checked={checked[id]}
                    />
                    <span className='checkbox__check'></span>
                    {name} ({count})
                </label>
            ));
        }
    }

    return (
        <div className='event-filter'>
            <h4 className='event-filter__title'>
                {title}
                <span className='event-filter__icon icon--solid'>
                    <Chevron />
                </span>
            </h4>
            <div className='event-filter__splash'>
                <form className='event-filter__form'>
                    {renderFilter()}
                    <button
                        className='event-filter__reset-btn text-underline'
                        type='reset'
                        onClick={handleResetForm}
                    >
                        Очистить фильтр
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Filter;
