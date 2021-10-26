import React from 'react';
import clsx from 'clsx';

import styles from './Wrapper.module.scss';

interface IWrapper {
    className?: string;
}

const Wrapper: React.FunctionComponent<IWrapper> = ({ children, className }) => {
    return <div className={clsx(styles.wrapper, className)}>{children}</div>;
};

export default Wrapper;
