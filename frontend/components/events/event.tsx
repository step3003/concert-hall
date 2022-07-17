import React from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
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
    const { tickets } = useAppSelector((state) => state.user.cart);
    const inCart = tickets.find((t) => t.id == id);
    const convertedDate = convertDate(event_date_at);

    function handleBuyTicket() {
        const ticket = {
            id,
            title,
            description,
            event_date_at: convertedDate,
            price,
            preview_image,
            isPaid: false,
            payInfo: null,
        };

        dispatch(addTicket(ticket));
    }

    return (
        <div className='event'>
            <div className='event__header'>
                <h3 className='event__title'>{title}</h3>
                <p className='event__date'>{convertedDate}</p>
            </div>
            <div className='event__about'>
                <div className='event__image'>
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
                <div className='event__desc'>
                    <p className='event__desc-text'>{description}</p>
                    <div className='event__footer'>
                        <p className='event__price'>{price} руб</p>
                        <div className='event__btns'>
                            {inCart ? (
                                <Link href='/cart'>
                                    <button className='event__btn btn'>
                                        В корзину
                                    </button>
                                </Link>
                            ) : (
                                <Link href='/cart'>
                                    <button
                                        className='event__btn btn btn--outline-brown'
                                        onClick={handleBuyTicket}
                                    >
                                        Купить билет
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
