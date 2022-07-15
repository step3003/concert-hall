import Link from 'next/link';

const Empty = () => {
    return (
        <div>
            <p>Вы еще не выбрали мероприятие</p>
            <Link href='/events'>
                <a className='cart__check-events'>
                    <span>Посмотреть мероприятия</span>
                </a>
            </Link>
        </div>
    );
};

export default Empty;
