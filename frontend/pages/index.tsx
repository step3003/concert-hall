import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ArrowRight from '../public/icons/arrow.svg';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Concert Hall</title>
                <meta name='description' content='Concert hall' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className='main'>
                <div className='main__wrapper'>
                    <div className='container'>
                        <p>20/10/2022 | 22:00</p>
                        <h2 className='main__title'>
                            Антонио Вивальди «Времена года»
                        </h2>
                        <button className='main__btn btn btn--outline-white'>
                            Подробнее
                        </button>
                    </div>
                </div>
            </main>
            <section className='up-events'>
                <div className='up-events__wrapper'>
                    <div className='up-events__container container'>
                        <h3 className='up-events__title title'>
                            Предстоящие мероприятия
                        </h3>
                        <Link href='/events'>
                            <a className='up-events__link link-effect'>
                                <span>Смотреть все мероприятия</span>
                                <ArrowRight />
                            </a>
                        </Link>

                        <div className='up-events__events'>
                            {['1', '2', '3'].map((path) => (
                                <a className='up-events__event' key={path}>
                                    <div className='up-events__event-overlay'>
                                        <Image
                                            src={`/images/upcoming-event-${path}.png`}
                                            layout='responsive'
                                            height='100'
                                            width='100'
                                            quality='100'
                                            alt='Мероприятие'
                                        />
                                    </div>
                                    <p className='up-events__event-date'>
                                        20/10/2022 | 22:00
                                    </p>
                                    <p className='up-events__event-title text-underline'>
                                        Камерный ансамбль оркестра МЕТ
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='history'>
                <div className='history__wrapper'>
                    <div className='container'>
                        <h3 className='title'>История</h3>
                        <div className='history__cards'>
                            {['1', '2', '3'].map((path) => (
                                <div className='history__card' key={path}>
                                    <div className='history__img-wrapper'>
                                        <Image
                                            src={`/images/history-${path}.png`}
                                            layout='responsive'
                                            width='100'
                                            height='100'
                                            quality='100'
                                            alt='История'
                                        />
                                    </div>
                                    <div className='history__card-desc'>
                                        <h4 className='history__card-title'>
                                            Moscow Jazz Festival в Саду
                                            «Эрмитаж»
                                        </h4>
                                        <p className='history__card-about'>
                                            Московский джазовый фестиваль
                                            (Moscow Jazz Festival) стал самым
                                            масштабным проектом за всю историю
                                            отечественного джаза.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
