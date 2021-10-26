import React from 'react';
import { User } from 'models';
import { LoginPayload, RegisterPayload } from 'models';
import request from '@lib/request';

const authApi = {
    login(data: LoginPayload): Promise<User> {
        const url = 'https://js-post-api.herokuapp.com/api/login';
        return request.post(url, data);
    },
    // register(data: RegisterPayload): Promise<User> {
    //     return request.post('register', data);
    // },
    logout() {
        return request.post('/logout');
    },
};

export default authApi;
