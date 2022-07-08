import React from 'react';
import Image from 'next/image';
import { useAppDispatch } from '../../app/hooks';
import { addTicket } from '../../features/user/userSlice';
import { IEvent } from '../../types/event';
import Link from 'next/link';
import { convertDate } from '../../shared/libs/math';

export const Event: React.FC<IEvent> = ({
    id,
    title,
    description,
    slug,
    event_date_at,
    duration,
    price,
    preview_image,
}) => {
    const dispatch = useAppDispatch();

    function handleBuyTicket() {
        const ticket = {
            id,
            title,
            description,
            event_date_at,
            price,
            preview_image,
            isPaid: false,
            payInfo: null,
        };

        dispatch(addTicket(ticket));
    }

    return (
        <div className='event'>
            <div className='event__title-date'>
                <h3 className='event__title'>{title}</h3>
                <p className='event__date'>{convertDate(event_date_at)}</p>
            </div>
            <div className='event__image-about'>
                <div className='event__image-wrapper'>
                    <Image
                        src={preview_image ?? '/images/no-img.png'}
                        layout='responsive'
                        width={100}
                        height={70}
                        quality={100}
                        objectFit='cover'
                        alt={preview_image ? 'Концертный зал' : 'Нет картинки'}
                    />
                </div>
                <div className='event__about'>
                    <p className='event__desc'>{description}</p>
                    <div className='event__price-control'>
                        <p className='event__price'>{price} руб</p>
                        <div className='event__control'>
                            {/* <button className='event__control-btn btn btn--outline-brown'> */}
                            {/*     Подробнее */}
                            {/* </button> */}
                            <Link href='/cart'>
                                <button
                                    className='event__control-btn btn btn--outline-brown'
                                    onClick={handleBuyTicket}
                                >
                                    Купить билет
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
