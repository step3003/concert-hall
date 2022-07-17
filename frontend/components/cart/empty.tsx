import Link from 'next/link';

const Empty = () => {
    return (
        <div className='cart__empty'>
            <p className='cart__empty-text'>Вы еще не выбрали мероприятие</p>
            <Link href='/events'>
                <a className='cart__empty-link'>
                    <span>Посмотреть мероприятия</span>
                </a>
            </Link>
        </div>
    );
};

export default Empty;
