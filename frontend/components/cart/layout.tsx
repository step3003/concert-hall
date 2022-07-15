import React from 'react';
import SideBar from './choose-seat/sideBar';

type Props = {
    children: JSX.Element | JSX.Element[];
    isChooseSeat?: boolean;
};

export const Layout: React.FC<Props> = ({ children, isChooseSeat }) => {
    return (
        <div className='cart'>
            <div className='cart__wrapper'>
                <div className='container'>
                    <h3 className='title'>Корзина</h3>
                    {children}
                </div>
            </div>
            {isChooseSeat && <SideBar />}
        </div>
    );
};

export default Layout;
