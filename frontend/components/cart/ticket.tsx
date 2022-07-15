import Link from 'next/link';
import Image from 'next/image';
import { ITicket } from '../../types/cart';
import { removeTicket } from '../../features/user/userSlice';
import { useAppDispatch } from '../../app/hooks';

const Ticket: React.FC<ITicket> = ({
    id,
    title,
    price,
    event_date_at,
    preview_image,
    isPaid,
    payInfo,
}: any) => {
    const dispatch = useAppDispatch();

    function handleRemoveTicket() {
        dispatch(removeTicket(id));
    }

    return (
        <div className='ticket'>
            <div className='ticket__img'>
                <Image
                    src={preview_image ?? '/images/no-img.png'}
                    width={100}
                    height={100}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt={preview_image ? 'Концертный зал' : 'Нет картинки'}
                />
            </div>
            <div className='ticket__content'>
                <h4 className='ticket__title'>{title}</h4>
                <div className='ticket__control'>
                    {payInfo && (
                        <>
                            <div className='ticket__info'>
                                <p>Места: {payInfo.places.join(', ')}</p>
                                <p className='ticket__info-cost'>
                                    Стоимость: {payInfo.cost} <span>руб</span>
                                </p>
                                <p>{payInfo.date}</p>
                            </div>
                            <Link href={payInfo.pdf} passHref>
                                <a className='text-underline'>Открыть билет</a>
                            </Link>
                        </>
                    )}
                    <p>{event_date_at}</p>
                    <Link
                        href={{
                            pathname: '/cart/choose-seat/[id]',
                            query: { id },
                        }}
                        passHref
                    >
                        <a className='text-underline'>Выбрать места</a>
                    </Link>
                    {!payInfo && (
                        <button
                            className='ticket__delete-btn close-btn'
                            aria-hidden='true'
                            onClick={handleRemoveTicket}
                        >
                            <span className='sr-only'>Удалить билет</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Ticket;
