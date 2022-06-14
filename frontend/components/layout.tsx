import React from 'react';
import Header from './header';
import Footer from './footer';

type Props = {
    children: JSX.Element | JSX.Element[];
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className='layout-wrapper'>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
