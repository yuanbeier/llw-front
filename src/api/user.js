import request from '@/router/axios';
import { baseUrl } from '@/config/env';
export const loginByUsername = (username, password,client_id,client_secret,scope,grant_type, code, redomStr) => request({
    url: baseUrl + '/api/oauth/token',
    method: 'post',
    meta: {
        isToken: false
    },
    params: {
        username,
        password,
        client_id,
        client_secret,
        scope,
        grant_type,
        code,
        redomStr
    }
})

export const getUserInfo = () => request({
    url: baseUrl + '/api/user/getUserInfo',
    method: 'get'
});

export const refeshToken = () => request({
    url: baseUrl + '/user/refesh',
    method: 'post'
})

export const getMenu = (type = 0) => request({
    url: baseUrl + '/user/getMenu',
    method: 'get',
    data: {
        type
    }
});

export const getTopMenu = () => request({
    url: baseUrl + '/user/getTopMenu',
    method: 'get'
});

export const sendLogs = (list) => request({
    url: baseUrl + '/user/logout',
    method: 'post',
    data: list
})

export const logout = () => request({
    url: baseUrl + '/user/logout',
    meta: {
        isToken: false
    },
    method: 'get'
})
