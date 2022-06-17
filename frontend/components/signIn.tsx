import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import cn from 'classnames';

type Props = {
    isSignIn: boolean;
    handleDontHaveAccountBtn: () => any;
};

const SignIn: React.FC<Props> = ({ isSignIn, handleDontHaveAccountBtn }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
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
                    <AiOutlineEye onClick={() => setShowPassword(true)} />
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
    );
};

export default SignIn;
