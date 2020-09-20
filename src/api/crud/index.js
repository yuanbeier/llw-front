
import request from '@/router/axios';
import { baseUrl } from '@/config/env';
export const list = (data) => {
  console.log(data);
  return request({
    url: baseUrl + '/api/article/list',
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
export const del = (id) => request.delete(baseUrl + '/api/article/', {
  params: {
    id
  }
})
export const add = (data) => request({
  url: baseUrl + '/api/article/add',
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
  url: baseUrl + '/api/article',
  method: 'put',
  meta: {
    isSerialize: true
  },
  data: data,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})



