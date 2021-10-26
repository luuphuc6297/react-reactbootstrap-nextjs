import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Control, useController } from 'react-hook-form';

import styles from './Input.module.scss';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type?: string;
    control: Control<any>;
    className?: string;
}

const Input: React.FC<IInput> = ({ name, control, className }) => {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({ name, control });

    return (
        <div className={clsx(styles.inputRoot, className)}>
            <input value={value} ref={ref} onChange={onChange} onBlur={onBlur} />
            {invalid && <p>{error?.message}</p>}
        </div>
    );
};
export default Input;
