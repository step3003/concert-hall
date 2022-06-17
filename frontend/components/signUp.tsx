import React from 'react';
import cn from 'classnames';

type Props = {
    isSignUp: boolean;
    handleAlreayHadAccountBtn: () => any;
};

const SignUp: React.FC<Props> = ({ isSignUp, handleAlreayHadAccountBtn }) => {
    return (
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
    );
};

export default SignUp;
