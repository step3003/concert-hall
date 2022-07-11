import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useLoginMutation } from '../features/auth/authApi';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';

type Props = {
    isSignIn: boolean;
    handleDontHaveAccountBtn: () => any;
    handleCloseBtn: () => any;
};

const schema = yup.object({
    email: yup
        .string()
        .required('обязательное поле')
        .email('некорректная почта'),
    password: yup.string().required('обязательное поле'),
});

interface IAuthForm {
    email: string;
    password: string;
}

const SignIn: React.FC<Props> = ({
    isSignIn,
    handleDontHaveAccountBtn,
    handleCloseBtn,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [authLogin] = useLoginMutation();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IAuthForm>({ resolver: yupResolver(schema) });

    function handleLogin(loginData: IAuthForm) {
        authLogin(loginData);
        handleCloseBtn();
    }

    return (
        <form
            className={cn('sign__form', {
                'sign__form--active': isSignIn,
            })}
            onSubmit={handleSubmit(handleLogin)}
        >
            <div className='sign__field'>
                <label htmlFor='email' hidden>
                    Почта
                </label>
                <input
                    className='sign__input input'
                    type='text'
                    id='email'
                    placeholder='Почта'
                    {...register('email')}
                />
                <span className='sign__error'>{errors.email?.message}</span>
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
                    {...register('password')}
                />
                {showPassword ? (
                    <AiOutlineEyeInvisible
                        onClick={() => setShowPassword(false)}
                    />
                ) : (
                    <AiOutlineEye onClick={() => setShowPassword(true)} />
                )}
                <span className='sign__error'>{errors.password?.message}</span>
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
                <button className='btn' type='submit'>
                    Войти
                </button>
            </div>
        </form>
    );
};

export default SignIn;
