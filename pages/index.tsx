import React from 'react';
import type { NextPage } from 'next';
import { Introduction } from '@sections/HomePage';
import { Layout } from '@components';

const Home: NextPage = () => {
    return (
        <Layout>
            <Introduction />
        </Layout>
    );
};

export default Home;
