
import { httpResponse, responseType } from '@/utils/request'
import axios, { AxiosRequestConfig } from 'axios'



    const service = axios.create({
        timeout: 1000 * 30, // 请求超时时间
    })


    // request拦截器
    service.interceptors.request.use(
        config => {
            console.log('我被调用了')


            return config
        },
        error => {
            console.log('我错了')
            return Promise.reject(error)
        }
    )

    // response拦截器
    service.interceptors.response.use(
        ( response ) => {
            if (response.status !== 200 ) {
                console.log('我出错了 help!~')
            }
            return response.data
        },
        error => {
            console.log('我是response 我错了')
            return Promise.reject(error)
        }
    )



export const send = async <T>(
    config: AxiosRequestConfig,
    code = 200,
    preventFilter = false
  ) => {
    try {
        const res = (await service(config)) as unknown as httpResponse<T>;
        /**
         * 这个地方可以进行返回数据的判断
         */
        if (!preventFilter && res.code !== code) {
            return Promise.reject(res);
        } else if (preventFilter) {
            return res as unknown as T;
        }

        console.log(res)
        return res.data;
    } catch (error) {
        return Promise.reject(error)
    }
    
  };
  export const get = async <T>(
    url: string,
    config?: AxiosRequestConfig,
    code = 200,
    preventFilter = false
  ): Promise<T> => {
    return send(
      {
        ...config,
        url,
        method: "GET",
      },
      code,
      preventFilter
    );
  };
  
  export const post = async <T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig,
    code = 200,
    preventFilter = false
  ): Promise<T> => {
    return send(
      {
        ...config,
        url,
        method: "POST",
        data,
      },
      code,
      preventFilter
    );
  };



