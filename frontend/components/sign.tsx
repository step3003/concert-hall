// @ts-nocheck
import React from 'react';
import Google from '../public/icons/google.svg';
import Yandex from '../public/icons/yandex.svg';
import SignUp from './signUp';
import SignIn from './signIn';
import Modal from './modal';

type Props = {
    setIsOpenModal: (val: boolean) => any;
    setIsSignIn: (val: boolean) => any;
    setIsSignUp: (val: boolean) => any;
    isSignIn: boolean;
    isSignUp: boolean;
    isOpenModal: boolean;
};

export const Sign: React.FC<Props> = ({
    setIsOpenModal,
    setIsSignIn,
    setIsSignUp,
    isOpenModal,
    isSignIn,
    isSignUp,
}) => {
    function handleCloseBtn() {
        setIsOpenModal(false);
        setTimeout(() => {
            setIsSignIn(false);
            setIsSignUp(false);
        }, 200);
    }

    function handleAlreayHadAccountBtn(e) {
        e.preventDefault();
        setIsSignUp(false);
        setIsSignIn(true);
    }

    function handleDontHaveAccountBtn(e) {
        e.preventDefault();
        setIsSignIn(false);
        setIsSignUp(true);
    }

    return (
        <Modal
            className='sign'
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
        >
            <div className='sign__wrapper'>
                <button
                    className='close-btn'
                    aria-hidden='true'
                    onClick={handleCloseBtn}
                >
                    <span className='sr-only'>Закрыть</span>
                </button>
                <h3 className='title'>
                    {isSignIn && 'Войдите в аккаунт'}
                    {isSignUp && 'Создайте аккаунт'}
                </h3>
                <p className='sign__ways'>Войти с помощью</p>
                <div className='sign__icons'>
                    <Google />
                    <Yandex />
                </div>
                <span className='sign__or'>или</span>
                <SignIn
                    isSignIn={isSignIn}
                    handleDontHaveAccountBtn={handleDontHaveAccountBtn}
                />
                <SignUp
                    isSignUp={isSignUp}
                    handleAlreayHadAccountBtn={handleAlreayHadAccountBtn}
                />
            </div>
        </Modal>
    );
};

export default Sign;
