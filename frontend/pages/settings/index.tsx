import type { NextPage } from 'next';
import { useAppSelector } from '../../app/hooks';
import EditIcon from '../../public/icons/edit.svg';
import Image from 'next/image';
import ButtonIcon from '../../components/buttonIcon';

const Settings: NextPage = () => {
    const { user } = useAppSelector((state) => state.user);

    return (
        <div className='settings'>
            <div className='settings__wrapper'>
                <div className='container'>
                    <h3 className='title'>Настройки</h3>
                    <div className='settings__content'>
                        <div className='settings__image'>
                            <Image
                                src='/images/violinist.jpg'
                                height={100}
                                width={50}
                                layout='responsive'
                                objectFit='cover'
                                alt='Скрипач'
                            />
                        </div>
                        <div className='settings__user-info'>
                            <p className='settings__user-name'>{user?.name}</p>
                            <p className='settings__user-lastnaame'>
                                {user?.last_name}
                            </p>
                            <ButtonIcon
                                className='settings__edit-btn'
                                icon={<EditIcon />}
                            >
                                Редактировать
                            </ButtonIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
