import React from 'react';
import { useAppDispatch, useAppSelector, useSSR } from '../app/hooks';
import { signIn, signUp, setIsSearch } from '../features/common/commonSlice';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MenuBar from './menuBar';
import Search from '../public/icons/search.svg';
import cn from 'classnames';

const Header = () => {
    const SSR = useSSR()
    const { pathname } = useRouter();
    const { user } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    function isLinkActive(path: string) {
        return cn('header__link', {
            'header__link header__link--active': pathname == path,
        });
    }

    function handleSignInBtn() {
        dispatch(signIn());
    }

    function handleSignUpBtn() {
        dispatch(signUp());
    }

    function handleSearchBtn() {
        dispatch(setIsSearch(true));
    }

    return (
        <header className='header'>
            <nav className='header__nav'>
                <Link href='/'>
                    <a className='header__link'>
                        <h1 className='header__title'>Concert Hall</h1>
                    </a>
                </Link>
                <Link href='/events'>
                    <a className={isLinkActive('/events')}>Мероприятия</a>
                </Link>
                <Link href='/blog'>
                    <a className={isLinkActive('/blog')}>Блог</a>
                </Link>
                <Link href='/gallery'>
                    <a className={isLinkActive('/gallery')}>Галерея</a>
                </Link>
            </nav>
            <div className='header__buttons'>
                {!SSR && user ? (
                    <MenuBar user={user} />
                ) : (
                    <>
                        <button
                            className='header__search-btn icon--solid'
                            onClick={handleSearchBtn}
                        >
                            <span className='sr-only'>Поиск</span>
                            <Search />
                        </button>
                        <button
                            className='header__sign-in-btn'
                            onClick={handleSignInBtn}
                        >
                            Войти
                        </button>
                        <button className='btn' onClick={handleSignUpBtn}>
                            Зарегистрироваться
                        </button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
