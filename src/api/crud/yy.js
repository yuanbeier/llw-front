
import request from '@/router/axios';
import { baseUrl } from '@/config/env';

export const listOut = (data) => {
  console.log(data);
  return request({
    url: baseUrl + '/api/yy/list',
    method: 'post',
    meta: {
      isSerialize: true
    },
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export const get = (id) => request.get(baseUrl + '/api/yy/'+ id, {
})




