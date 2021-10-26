import * as yup from 'yup';

// export const LoginSchema = yup.object({}).required();

export const LoginSchema = yup.object({
    id: yup
        .string()
        .email(`*Please include an '@' in email address`)
        .min(0, '*Min is 0 characters')
        .max(128, '*Max is 128 characters')
        .required('*Username is not required field'),
    password: yup.string().required('*Password is required field'),
});
