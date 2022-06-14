import React from 'react';
import Image from 'next/image'

export const Event = () => {
    return (
        <div className='event'>
            <div className='event__title-date'>
                <h3 className='event__title'>
                    Вольфганг Амадей Моцарт - Реквием
                </h3>
                <p className='event__date'>20/12/2022 - 19:00</p>
            </div>
            <div className='event__image-about'>
                <div className='event__image-wrapper'>
                    <Image
                        src='/images/event-1.png'
                        layout='responsive'
                        width='100'
                        height='100'
                        quality='100'
                    />
                </div>
                <div className='event__about'>
                    <p className='event__desc'>
                        Сегодня это трудно представить, но когда-то музыка
                        Иоганна Себастьяна Баха не осознавалась классикой! Да и
                        сам он не считался великим композитором. А вот баховские
                        импровизации, наоборот, очень ценились – ведь гениальный
                        органист мог импровизировать часами, не повторяясь!
                    </p>
                    <div className='event__price-control'>
                        <p className='event__price'>15 руб</p>
                        <div className='event__control'>
                            <button className='event__control-btn btn btn--outline-brown'>
                                Подробнее
                            </button>
                            <button className='event__control-btn btn'>Купить билет</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
