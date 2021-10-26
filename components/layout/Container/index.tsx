import clsx from 'clsx';
import React from 'react';

import styles from './Container.module.scss';

interface IContainer {
    className?: string;
}

const Container: React.FC<IContainer> = ({ children, className }) => {
    return <div className={clsx(styles.containerRoot, className)}>{children}</div>;
};

export default Container;
