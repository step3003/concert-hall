import React from 'react';
import TG from '../public/icons/tg.svg';
import Inst from '../public/icons/inst.svg';

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__wrapper'>
                    <div className='footer__item'>
                        <h2 className='footer__about-title'>Concert Hall</h2>
                        <p className='footer__about-copy'>
                            &copy; 2022 Concert Hall
                        </p>
                    </div>
                    <div className='footer__item'>
                        <h3 className='footer__title'>Аддресс</h3>
                        <p className='footer__address'>
                            Jr. Valentín Amador №6330 Piso 17 Puerto Sebastián
                            Henríquez, Tumbes
                        </p>
                    </div>
                    <div className='footer__item'>
                        <h3 className='footer__title'>Номера</h3>
                        <div className='footer__numbers'>
                            <a
                                className='footer__number'
                                href='tel:45209435083'
                            >
                                4(520)943-50-83
                            </a>
                            <a
                                className='footer__number'
                                href='tel:45209435083'
                            >
                                4(520)943-50-83
                            </a>
                        </div>
                    </div>
                    <div className='footer__item'>
                        <h3 className='footer__title'>Социальные сети</h3>
                        <div className='footer__soc-icons'>
                            <a className='footer__soc-icon'>
                                <TG />
                            </a>
                            <a className='footer__soc-icon'>
                                <Inst />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
