// @ts-nocheck
import React from 'react';
import Google from '../public/icons/google.svg';
import Yandex from '../public/icons/yandex.svg';
import SignUp from './signUp';
import SignIn from './signIn';
import cn from 'classnames';

type Props = {
    setIsOpenModal: (val: boolean) => true;
    setIsSignIn: (val: boolean) => true;
    setIsSignUp: (val: boolean) => true;
    isSignIn: boolean;
    isSignUp: boolean;
    isOpenModal: boolean;
};

export const Sign: React.FC<Props> = ({
    setIsOpenModal,
    setIsSignIn,
    setIsSignUp,
    isSignIn,
    isSignUp,
    isOpenModal,
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

    function handleClickOuterModal(e) {
        const classList = Array.from(e.target.classList);
        if (classList.includes('modal--active')) {
            handleCloseBtn();
        }
    }

    return (
        <div
            className={cn('sign modal', {
                'modal--active': isOpenModal,
            })}
            onClick={handleClickOuterModal}
        >
            <div className='modal__wrapper'>
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
        </div>
    );
};

export default Sign;
