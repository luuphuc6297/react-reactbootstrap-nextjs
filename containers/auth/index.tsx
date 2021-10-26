import { LoginForm } from 'forms';
import { IForm } from '@forms/LoginForm';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { LoginPayload } from 'models';

const initialValues: IForm = {
    id: '',
    password: '',
};

const LoginContainer: React.FC = () => {
    const handleSubmit: SubmitHandler<LoginPayload> = async (values) => {
        console.log('values', values);
    };

    return <LoginForm initialValues={initialValues} onSubmit={handleSubmit} />;
};

export default LoginContainer;
