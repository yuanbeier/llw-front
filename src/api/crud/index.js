
import request from '@/router/axios';
import { baseUrl } from '@/config/env';
export const list = (data) => {
  console.log(data);
  return request({
    url: baseUrl + '/llw-back/article/list',
    method: 'post',
    meta: {
      isSerialize: true
    },
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export const del = (id) => request.delete(baseUrl + '/llw-back/article/', {
  params: {
    id
  }
})
export const get = (id) => request.get(baseUrl + '/llw-back/yy/', {
  params: {
    id
  }
})
export const add = (data) => request({
  url: baseUrl + '/llw-back/article/add',
  method: 'post',
  meta: {
    isSerialize: true
  },
  data: data,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
export const update = (id, data) => request({
  url: baseUrl + '/llw-back/article',
  method: 'put',
  meta: {
    isSerialize: true
  },
  data: data,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})



