import React from 'react';
import styles from './MainWrapper.module.scss';

const MainWrapper: React.FC = ({ children }) => {
    return <div className={styles.mainWrapper}>{children}</div>;
};

export default MainWrapper;
