import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { resetUser } from '../features/user/userSlice';
import { setIsSearch } from '../features/common/commonSlice';
import Link from 'next/link';
import SearchIcon from '../public/icons/search.svg';
import BookmarkIcon from '../public/icons/bookmark.svg';
import TicketIcon from '../public/icons/ticket.svg';
import SettingsIcon from '../public/icons/settings.svg';
import ExitIcon from '../public/icons/exit.svg';
import cn from 'classnames';

// @ts-ignore
const MenuBar = ({ user }) => {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useAppDispatch();

    const menuList = [
        {
            Icon: BookmarkIcon,
            text: 'Мои закладки',
            link: '#',
        },
        {
            Icon: TicketIcon,
            text: 'Билеты',
            link: '/cart',
        },
        {
            Icon: SettingsIcon,
            text: 'Настройки',
            link: '/settings',
        },
    ];

    function handleSearchBtn() {
        dispatch(setIsSearch(true));
    }

    function handleExitBtn() {
        dispatch(resetUser());
    }

    return (
        <div
            className={cn('menu-bar', { 'menu-bar--active': isActive })}
            onMouseLeave={() => setIsActive(false)}
        >
            <div className='menu-bar__wrapper'>
                <div
                    className='menu-bar__user'
                    onMouseMove={() => setIsActive(true)}
                >
                    <button
                        className='menu-bar__search-btn'
                        onClick={handleSearchBtn}
                    >
                        <SearchIcon />
                        <span className='sr-only'>Поиск</span>
                    </button>
                    <Link href='/settings'>
                        <a className='menu-bar__user-link'>
                            {`${user.name} ${user.last_name}`}
                        </a>
                    </Link>
                </div>
                <ul className='menu-bar__list'>
                    {menuList.map(({ Icon, text, link }) => (
                        <li className='menu-bar__list-item' key={text}>
                            <Link href={link}>
                                <a className='menu-bar__list-link'>
                                    <Icon />
                                    {text}
                                </a>
                            </Link>
                        </li>
                    ))}
                    <li className='menu-bar__list-item'>
                        <button
                            className='menu-bar__list-btn'
                            onClick={handleExitBtn}
                        >
                            <ExitIcon />
                            Выйти
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MenuBar;
