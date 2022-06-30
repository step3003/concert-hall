import React from 'react';
import SideBar from './sideBar';

type Props = {
    children: JSX.Element | JSX.Element[];
    isMain?: boolean;
};

export const Layout: React.FC<Props> = ({ children, isMain }) => {
    return (
        <div className='cart'>
            <div className='cart__wrapper'>
                <div className='container'>
                    <h3 className='title'>Корзина</h3>
                    {children}
                </div>
            </div>
            {!isMain && <SideBar />}
        </div>
    );
};

export default Layout;
