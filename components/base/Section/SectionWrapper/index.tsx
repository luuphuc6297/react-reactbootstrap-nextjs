import clsx from 'clsx';
import React from 'react';
import styles from './SectionWrapper.module.scss';

interface ISectionWrapperProps {
    id?: string;
    className?: string;
}

const SectionWrapper: React.FunctionComponent<ISectionWrapperProps> = ({ children, id, className }) => {
    return (
        <section id={id} className={clsx(styles.sectionWrapper, className)}>
            {children}
        </section>
    );
};

export default SectionWrapper;
