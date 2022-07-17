import '../styles/main.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Layout from '../components/layout';
import NP from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <NP color='#916648' options={{ showSpinner: false }} />
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
