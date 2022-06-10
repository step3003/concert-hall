import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://51.250.30.77/api/news/index')
            .then((data) => data.json())
            .then((items) => {
                setNews(items.data);
            });
    }, []);

    return (
        <div>
            <Head>
                <title>Concert Hall</title>
                <meta name='description' content='Concert Hall by Alex' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='container'>
                <h1>Concert Hall</h1>
                <p>What about...</p>
                <h2>News</h2>
                <ul>
                    {news.map(({ id, title, description, preview_image }) => {
                        return (
                            <li key={id}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <div className='news__preview'>
                                    <Image
                                        className='news__preview-img'
                                        layout='fill'
                                        src={preview_image}
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
