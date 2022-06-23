import Link from 'next/link';
import Image from 'next/image';

const Ticket = ({ imgSrc, title, info, id }: any) => {
    return (
        <div className='ticket'>
            <div className='ticket__img'>
                <Image
                    src={imgSrc}
                    width={100}
                    height={100}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                />
            </div>
            <div className='ticket__content'>
                <h4 className='ticket__title'>{title}</h4>
                <div className='ticket__control'>
                    <div className='ticket__info'>
                        {info?.cost && (
                            <>
                                <p>Места: {info.places.join(', ')}</p>
                                <p className='ticket__info-cost'>
                                    Стоимость: {info.cost} <span>руб</span>
                                </p>
                            </>
                        )}
                        <p>{info.date}</p>
                    </div>
                    <Link
                        href={{
                            pathname: '/cart/choose-seat/[id]',
                            query: { id },
                        }}
                        passHref
                    >
                        <a className='text-underline'>
                            {!info?.cost ? 'Выбрать места' : 'Открыть билет'}
                        </a>
                    </Link>
                </div>
            </div>

            {!info?.cost && (
                <button
                    className='ticket__delete-btn close-btn'
                    aria-hidden='true'
                >
                    <span className='sr-only'>Удалить билет</span>
                </button>
            )}
        </div>
    );
};

export default Ticket;
