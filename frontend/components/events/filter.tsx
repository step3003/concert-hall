import React, { useState, useEffect } from 'react';
import Chevron from '../../public/icons/chevron.svg';

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

    // useEffect(() => {
    //     console.log(checked);
    // }, [checked]);

    function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
        setChecked((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.checked,
        }));
    }

    function handleResetForm() {
        const checkedClean: any = {};

        for (let key in checked) {
            checkedClean[key] = false;
        }

        setChecked(checkedClean);
    }

    function renderFilter() {
        if (title == 'Дата') {
            return (
                <>
                    <label>
                        С
                        <input id='to' type='date' />
                    </label>
                    <label>
                        По
                        <input id='to' type='date' />
                    </label>
                </>
            );
        } else {
            return filters.map(({ name, count, id }) => (
                <label key={id} className='checkbox'>
                    <input
                        className='checkbox__input'
                        type='checkbox'
                        onChange={handleCheckbox}
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
