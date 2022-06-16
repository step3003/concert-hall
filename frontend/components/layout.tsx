// @ts-nocheck
import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Sign from './sign';

type Props = {
    children: JSX.Element | JSX.Element[];
};

export const Layout: React.FC<Props> = ({ children }) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [isSignIn, setIsSignIn] = useState<boolean>(false);
    const [isSignUp, setIsSignUp] = useState<boolean>(false);

    return (
        <div className='layout-wrapper'>
            <Sign
                setIsOpenModal={setIsOpenModal}
                setIsSignIn={setIsSignIn}
                setIsSignUp={setIsSignUp}
                isSignIn={isSignIn}
                isSignUp={isSignUp}
                isOpenModal={isOpenModal}
                title='Войдите в аккаунт'
            />
            <Header
                setIsOpenModal={setIsOpenModal}
                setIsSignIn={setIsSignIn}
                setIsSignUp={setIsSignUp}
            />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
