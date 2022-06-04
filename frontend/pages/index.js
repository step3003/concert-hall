import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Concert Hall</title>
                <meta name='description' content='Concert Hall by Alex' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <h1>Concert Hall</h1>
            <p>What about...</p>
        </div>
    );
}
