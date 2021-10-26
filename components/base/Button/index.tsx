import styles from './Button.module.scss';

import React from 'react';
import { Button as BTButton } from 'react-bootstrap';

interface IButton {
    className?: string;
    onClick?: () => void;
}
const Button: React.FC<IButton> = ({ onClick, className }) => {
    return (
        <BTButton variant="primary" className={styles.root} onClick={onClick}>
            Acb
        </BTButton>
    );
};
export default Button;
