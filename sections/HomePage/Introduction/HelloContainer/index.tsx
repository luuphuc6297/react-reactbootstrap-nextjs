import React from 'react';

import { Section } from '@components';
import styles from './HelloContainer.module.scss';

const { SectionTitle, SectionSubTitle } = Section;

const HelloContainer: React.FC = () => {
    return (
        <div className={styles.helloContainer}>
            <SectionTitle>Template.net</SectionTitle>
            <SectionSubTitle>
                Beautifully Designed, Easily Editable Templates to Get your Work Done Faster & Smarter. Simply Browse,
                Search, Save & Download our Easy to use Templates.
            </SectionSubTitle>
        </div>
    );
};
export default HelloContainer;
