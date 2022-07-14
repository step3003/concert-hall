import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MenuBar from './menuBar';
import Search from '../public/icons/search.svg';
import cn from 'classnames';

type Props = {
    setIsSignIn: (val: boolean) => void;
    setIsSignUp: (val: boolean) => void;
    setIsOpenModal: (val: boolean) => void;
};

const Header: React.FC<Props> = ({
    setIsSignIn,
    setIsSignUp,
    setIsOpenModal,
}) => {
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);

    const { pathname } = useRouter();
    const { user } = useAppSelector((state) => state.user);

    function isLinkActive(path: string) {
        return cn('header__link', {
            'header__link header__link--active': pathname == path,
        });
    }

    function handleSignIn() {
        setIsOpenModal(true);
        setIsSignUp(false);
        setIsSignIn(true);
    }

    function handleSignUp() {
        setIsOpenModal(true);
        setIsSignIn(false);
        setIsSignUp(true);
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
                {!isSSR && user ? (
                    <MenuBar user={user} />
                ) : (
                    <>
                        <button className='header__search-btn icon--solid'>
                            <Search />
                        </button>
                        <button
                            className='header__sign-in-btn'
                            onClick={handleSignIn}
                        >
                            Войти
                        </button>
                        <button className='btn' onClick={handleSignUp}>
                            Зарегистрироваться
                        </button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
