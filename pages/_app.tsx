import 'bootstrap/dist/css/bootstrap.min.css';
// Library
import { debounce } from 'lodash';
// Next
import { AppProps } from 'next/app';
import Router from 'next/router';
import nprogress from 'nprogress';
import React from 'react';
import '../styles/globals.scss';

// Slim progress bars for Ajax'y applications. Inspired by Google, YouTube, and Medium.
nprogress.configure({ showSpinner: false });
const start = debounce(nprogress.start, 300);
Router.events.on('routeChangeStart', start);
Router.events.on('routeChangeComplete', () => {
    start.cancel();
    nprogress.done();
    window.scrollTo({
        top: 0,
        left: 0,
        // behavior: 'smooth',
    });
});
Router.events.on('routeChangeError', () => {
    start.cancel();
    nprogress.done();
});

function App({ Component, pageProps, err }: AppProps & { err: Error }): JSX.Element {
    return <Component {...pageProps} err={err} />;
}

export default App;
