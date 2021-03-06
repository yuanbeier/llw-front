import request from '@/router/axios';
import { baseUrl } from '@/config/env';
export const loginByUsername = (username, password,client_id,client_secret,scope,grant_type, code, redomStr) => request({
    url: baseUrl + '/llw-back/oauth/token',
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
    },
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

export const getUserInfo = () => request({
    url: baseUrl + '/llw-back/user/getUserInfo',
    method: 'get'
});

export const refeshToken = () => request({
    url: baseUrl + '/user/refesh',
    method: 'post'
})

export const getMenu = (type = 0) => request({
    url: baseUrl + '/men/getMenu',
    method: 'get',
    data: {
        type
    }
});

export const getTopMenu = () => request({
    url: baseUrl + '/men/getTopMenu',
    method: 'get'
});

export const sendLogs = (list) => request({
    url: baseUrl + '/llw-back/user/logout',
    method: 'post',
    data: list
})

export const logout = () => request({
    url: baseUrl + '/llw-back/user/logout',
    method: 'get'
})
