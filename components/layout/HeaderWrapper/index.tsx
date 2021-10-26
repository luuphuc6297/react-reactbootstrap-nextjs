import React from 'react';

import styles from './HeaderWrapper.module.scss';

const HeaderWrapper: React.FC = ({ children }) => {
    return <div className={styles.headerWrapperRoot}>{children}</div>;
};

export default HeaderWrapper;
