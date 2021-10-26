import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { LoginPayload } from 'models';
import { Input } from '@components';
import styles from './LoginForm.module.scss';

// Validation
import { LoginSchema } from './validation';

interface ILoginForm {
    onSubmit: (values: LoginPayload) => void;
    initialValues: IForm;
}

export interface IForm {
    id: string;
    password: string;
}

const LoginForm: React.FC<ILoginForm> = ({ initialValues, onSubmit }) => {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<IForm>({
        defaultValues: initialValues,
        resolver: yupResolver(LoginSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.idWrapper}>
                <Input name="id" control={control} />
            </div>
        </form>
    );
};

export default LoginForm;
