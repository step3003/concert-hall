import Image from 'next/image';
const EventSkeleton = () => {
    return (
        <div className='event-skeleton'>
            <div className='event-skeleton__header'>
                <h3 className='event-skeleton__title'></h3>
                <p className='event-skeleton__date'></p>
            </div>
            <div className='event-skeleton__about'>
                <div className='event-skeleton__image'>
                    <Image
                        src='/'
                        layout='responsive'
                        width={100}
                        height={70}
                        quality={100}
                        objectFit='cover'
                        alt='Загрузка'
                    />
                </div>
                <div className='event-skeleton__desc'>
                    <p className='event-skeleton__desc-text'></p>
                    <p className='event-skeleton__desc-text'></p>
                    <p className='event-skeleton__desc-text'></p>
                    <div className='event-skeleton__footer'>
                        <p className='event-skeleton__price'></p>
                        <button className='event-skeleton__btn'></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventSkeleton;
