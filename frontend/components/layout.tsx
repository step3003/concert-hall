// @ts-nocheck
import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Sign from './sign';
import Search from './search';

type Props = {
    children: JSX.Element | JSX.Element[];
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className='layout-wrapper'>
            <Sign />
            <Search />
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
