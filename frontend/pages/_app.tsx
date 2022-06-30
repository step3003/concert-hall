import '../styles/main.scss';
import Layout from '../components/layout';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
