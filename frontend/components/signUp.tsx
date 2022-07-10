import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRegisterMutation } from '../features/auth/authApi';
import { yupResolver } from '@hookform/resolvers/yup';
import { IRegister } from '../types/auth';
import * as yup from 'yup';
import cn from 'classnames';

type Props = {
    isSignUp: boolean;
    handleAlreayHadAccountBtn: () => any;
};

interface ISignUp extends IRegister {
    passwordConfirm: string;
}

const schema = yup.object({
    name: yup.string().required('обязательное поле'),
    last_name: yup.string().required('обязательное поле'),
    email: yup
        .string()
        .required('обязательное поле')
        .email('некорректная почта'),
    password: yup.string().required('обязательное поле'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], 'пароль не совпадает'),
});

const SignUp: React.FC<Props> = ({ isSignUp, handleAlreayHadAccountBtn }) => {
    const [useRegister, result] = useRegisterMutation();
    const {
        isLoading,
        data: { data: user },
    } = result;

    useEffect(() => {
        if (!isLoading) {
            console.log(user);
        }
    }, [isLoading]);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<ISignUp>({ resolver: yupResolver(schema) });

    function onSubmit({ passwordConfirm, ...registerData }: ISignUp) {
        useRegister(registerData);
    }

    return (
        <form
            className={cn('sign__form', {
                'sign__form--active': isSignUp,
            })}
            onSubmit={handleSubmit(onSubmit)}
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
                    {...register('name', { required: true })}
                />
                <span className='sign__error'>{errors.name?.message}</span>
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
                    {...register('last_name')}
                />
                <span className='sign__error'>{errors.last_name?.message}</span>
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
                    {...register('email')}
                />
                <span className='sign__error'>{errors.email?.message}</span>
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
                    {...register('password')}
                />
                <span className='sign__error'>{errors.password?.message}</span>
            </div>
            <div className='sign__field'>
                <label htmlFor='password-confirm' hidden>
                    Повторите пароль
                </label>
                <input
                    className='sign__input input'
                    type='password'
                    id='password-confirm'
                    placeholder='Повторите пароль'
                    {...register('passwordConfirm')}
                />
                <span className='sign__error'>
                    {errors.passwordConfirm?.message}
                </span>
            </div>
            <div className='sign__control'>
                <button
                    className='text-underline'
                    onClick={handleAlreayHadAccountBtn}
                >
                    У меня есть аккаунт
                </button>
                <button className='btn' type='submit'>
                    Создать
                </button>
            </div>
        </form>
    );
};

export default SignUp;
