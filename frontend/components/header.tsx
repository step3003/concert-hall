import React from 'react';
import Link from 'next/link';
import Search from '../public/icons/search.svg';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <Link href='/'>
                    <a className='header__link'>
                        <h1 className='header__title'>Concert Hall</h1>
                    </a>
                </Link>
                <Link href='/events'>
                    <a className='header__link'>Мероприятия</a>
                </Link>
                <Link href='/blog'>
                    <a className='header__link'>Блог</a>
                </Link>
                <Link href='/gallery'>
                    <a className='header__link'>Галерея</a>
                </Link>
            </nav>
            <div className='header__buttons'>
                <button className='header__search-btn'>
                    <Search />
                </button>
                <button className='header__sign-in-btn'>Войти</button>
                <button className='btn'>Зарегистрироваться</button>
            </div>
        </header>
    );
};

export default Header;
