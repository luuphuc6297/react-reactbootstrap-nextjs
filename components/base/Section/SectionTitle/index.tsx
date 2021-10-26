import React from 'react';
import clsx from 'clsx';

import styles from './SectionTitle.module.scss';

interface ISectionTitleProps {
    className?: string;
}
const SectionTitle: React.FunctionComponent<ISectionTitleProps> = ({ children, className }) => {
    return <h1 className={clsx(styles.sectionTitle, className)}>{children}</h1>;
};

export default SectionTitle;
