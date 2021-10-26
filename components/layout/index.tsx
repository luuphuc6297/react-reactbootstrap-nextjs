import React from 'react';

import Container from './Container';
import HeaderWrapper from './HeaderWrapper';
import MainWrapper from './MainWrapper';

import SEOHead, { TSEOHead } from './SEOHead';
import Wrapper from './Wrapper';

export type LayoutProps = {
    headProps?: TSEOHead;
    className?: string;
};

const Layout: React.FC<LayoutProps> = ({ headProps, children, className }) => {
    return (
        <Wrapper className={className}>
            {/* SEO */}
            <SEOHead {...headProps} />

            {/* Header */}
            <HeaderWrapper>
                <Container>{/* <NavigationBar /> */}</Container>
            </HeaderWrapper>

            {/* Layout content */}
            <MainWrapper>{children}</MainWrapper>
        </Wrapper>
    );
};

export default Layout;
