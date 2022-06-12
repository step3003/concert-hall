import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
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
                <Header />
                <div className='container'>
                    <div className='main__wrapper'>
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
                <div className='container'>
                    <div className='up-events__wrapper'>
                        <h3 className='up-events__title title'>Предстоящие мероприятия</h3>
                        <Link href='/events'>
                            <a className='up-events__link'>
                                Смотреть все мероприятия
                                <ArrowRight />
                            </a>
                        </Link>

                        <div className='up-events__events'>
                            {['1', '2', '3'].map((path) => (
                                <a className='up-events__event'>
                                    <Image src={`/images/upcoming-event-${path}.png`} layout='responsive' height='100' width='100' quality='100'  />
                                    <p>Test</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
