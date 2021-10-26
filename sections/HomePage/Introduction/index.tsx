import { Section } from '@components';
import Container from '@components/layout/Container';
import React from 'react';

import HelloContainer from './HelloContainer';
import styles from './Introduction.module.scss';

const { SectionWrapper } = Section;

const Introduction: React.FunctionComponent = () => {
    return (
        <SectionWrapper id="introduction" className={styles.introductionWrapper}>
            <Container>
                <HelloContainer />
            </Container>
        </SectionWrapper>
    );
};

export default Introduction;
