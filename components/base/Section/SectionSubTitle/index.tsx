import React from 'react';
import styles from './SectionSubTitle.module.scss';

const SectionTitle: React.FC = ({ children }) => {
    return <p className={styles.sectionSubTitle}>{children}</p>;
};

export default SectionTitle;
