import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { resetUser } from '../features/user/userSlice';
import SearchIcon from '../public/icons/search.svg';
import BookmarkIcon from '../public/icons/bookmark.svg';
import TicketIcon from '../public/icons/ticket.svg';
import SettingsIcon from '../public/icons/settings.svg';
import ExitIcon from '../public/icons/exit.svg';
import cn from 'classnames';

const MenuBar = ({ user }) => {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useAppDispatch();

    const menuList = [
        {
            Icon: BookmarkIcon,
            item: 'Мои закладки',
            link: '#',
        },
        {
            Icon: TicketIcon,
            item: 'Билеты',
            link: '#',
        },
        {
            Icon: SettingsIcon,
            item: 'Настройки',
            link: '#',
        },
    ];

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
                    <a className='menu-bar__user-link' href='#'>
                        <span className='menu-bar__user-icon'>
                            <SearchIcon />
                        </span>
                        {`${user.name} ${user.last_name}`}
                    </a>
                </div>
                <ul className='menu-bar__list'>
                    {menuList.map(({ Icon, item, link }) => (
                        <li className='menu-bar__list-item'>
                            <a className='menu-bar__list-link' href={link}>
                                <span className='menu-bar__list-icon'>
                                    <Icon />
                                </span>
                                {item}
                            </a>
                        </li>
                    ))}
                    <li className='menu-bar__list-item'>
                        <button
                            className='menu-bar__list-btn'
                            onClick={handleExitBtn}
                        >
                            <span className='menu-bar__list-icon'>
                                <ExitIcon />
                            </span>
                            Выйти
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MenuBar;
