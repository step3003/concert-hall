import { NextPage } from 'next';
import { useRouter } from 'next/router';

const withAuth = (Page: NextPage) => (props: any) => {
    if (typeof window !== 'undefined') {
        const Router = useRouter();
        const user = localStorage.getItem('user');

        if (!user) {
            Router.replace('/');
            return null;
        }

        // return <Page {...props} />;
    }

    return null;
};

export default withAuth;
