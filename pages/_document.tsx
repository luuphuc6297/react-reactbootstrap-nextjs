// Next
import Document, {
    DocumentContext,
    DocumentInitialProps,
    DocumentProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import React from 'react';

type Props = {
    lang: string;
    locale: string;
};

class AppDocument extends Document<Props & DocumentProps> {
    static async getInitialProps(ctx: DocumentContext): Promise<Props & DocumentInitialProps> {
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () => originalRenderPage({});

        const initialProps = await Document.getInitialProps(ctx);

        const hasLocaleFromUrl = !!ctx.query?.locale;
        const locale = hasLocaleFromUrl ? (ctx.query?.locale as string) : 'en';
        const lang = locale.split('-')?.[0];

        return {
            ...initialProps,
            lang,
            locale,
        };
    }

    render(): JSX.Element {
        const { lang } = this.props;

        return (
            <Html lang={lang}>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" type="image/png" href="/favicon.png" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default AppDocument;
