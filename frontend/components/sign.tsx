 // @ts-nocheck
import React, { useState } from 'react';
import Google from '../public/icons/google.svg';
import Yandex from '../public/icons/yandex.svg';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
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
    // maybe you need delete isSignUp

    const [showPassword, setShowPassword] = useState(false);
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
                    className='modal__close-btn'
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
                <form
                    className={cn('sign__form', {
                        'sign__form--active': isSignIn,
                    })}
                >
                    <div className='sign__field'>
                        <label htmlFor='email' hidden>
                            Почта
                        </label>
                        <input
                            className='sign__input input'
                            type='email'
                            id='email'
                            placeholder='Почта'
                        />
                    </div>
                    <div className='sign__field sign__field--password'>
                        <label htmlFor='password' hidden>
                            Пароль
                        </label>
                        <input
                            className='sign__input input'
                            type={showPassword ? 'text' : 'password'}
                            id='password'
                            placeholder='Пароль'
                        />
                        {showPassword ? (
                            <AiOutlineEyeInvisible
                                onClick={() => setShowPassword(false)}
                            />
                        ) : (
                            <AiOutlineEye
                                onClick={() => setShowPassword(true)}
                            />
                        )}
                    </div>
                    <p className='sign__forgot-password text-underline'>
                        Забыли пароль?
                    </p>
                    <div className='sign__control'>
                        <button
                            className='text-underline'
                            onClick={handleDontHaveAccountBtn}
                        >
                            У меня нет аккаунта
                        </button>
                        <button className='btn'>Войти</button>
                    </div>
                </form>
                <form
                    className={cn('sign__form', {
                        'sign__form--active': isSignUp,
                    })}
                >
                    <div className='sign__field'>
                        <label htmlFor='firstname' hidden>
                            Имя
                        </label>
                        <input
                            className='sign__input input'
                            type='text'
                            id='firstname'
                            placeholder='Имя'
                        />
                    </div>
                    <div className='sign__field'>
                        <label htmlFor='lastname' hidden>
                            Фамилия
                        </label>
                        <input
                            className='sign__input input'
                            type='text'
                            id='lastname'
                            placeholder='Фамилия'
                        />
                    </div>
                    <div className='sign__field'>
                        <label htmlFor='email' hidden>
                            Почта
                        </label>
                        <input
                            className='sign__input input'
                            type='email'
                            id='email'
                            placeholder='Почта'
                        />
                    </div>
                    <div className='sign__field'>
                        <label htmlFor='password' hidden>
                            Пароль
                        </label>
                        <input
                            className='sign__input input'
                            type='password'
                            id='password'
                            placeholder='Пароль'
                        />
                    </div>
                    <div className='sign__field'>
                        <label htmlFor='password-repeat' hidden>
                            Повторите пароль
                        </label>
                        <input
                            className='sign__input input'
                            type='password'
                            id='password-repeat'
                            placeholder='Повторите пароль'
                        />
                    </div>
                    <div className='sign__control'>
                        <button
                            className='text-underline'
                            onClick={handleAlreayHadAccountBtn}
                        >
                            У меня есть аккаунт
                        </button>
                        <button className='btn'>Войти</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Sign;
