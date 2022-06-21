import React from 'react';

type Props = {
    children: JSX.Element | JSX.Element[];
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className='cart'>
            <div className='cart__wrapper'>
                <div className='container'>
                    <h3 className='title'>Корзина</h3>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
