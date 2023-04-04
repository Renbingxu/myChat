
import { AnyObject, responseType } from '@/utils/types'
import { post } from './index'



export const userLogin = (data : {
    user: string,
    password: string,
    notify: string
}) => {
    return post<AnyObject>(
        '/user/login',
        {
            data,
        }
    )
}
