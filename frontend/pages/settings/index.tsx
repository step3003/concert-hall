import type { NextPage } from 'next';
import { useAppSelector } from '../../app/hooks';
import Layout from '../../components/layout';

const Settings: NextPage = () => {
    return (
        <div className='settings'>
            <div className='settings__wrapper'>
                <div className='container'>
                    <h3 className='title'>Настройки</h3>
                </div>
            </div>
        </div>
    );
};

export default Settings;
