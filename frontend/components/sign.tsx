// @ts-nocheck
import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { resetSign } from '../features/common/commonSlice';
import Google from '../public/icons/google.svg';
import Yandex from '../public/icons/yandex.svg';
import SignUp from './signUp';
import SignIn from './signIn';
import Modal from './modal';

export const Sign = () => {
    const dispath = useAppDispatch();
    const { isSignIn, isSignUp } = useAppSelector((state) => state.common);

    function handleCloseBtn() {
        dispath(resetSign());
    }

    return (
        <Modal
            className='sign'
            isOpenModal={isSignIn || isSignUp}
            closeModal={handleCloseBtn}
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
                    {isSignIn ? 'Войдите в аккаунт' : 'Создайте аккаунт'}
                </h3>
                <p className='sign__ways'>Войти с помощью</p>
                <div className='sign__icons'>
                    <Google />
                    <Yandex />
                </div>
                <span className='sign__or'>или</span>
                {isSignIn ? <SignIn /> : <SignUp />}
            </div>
        </Modal>
    );
};

export default Sign;
