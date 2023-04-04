export interface AnyObject {
    [key: string]: any
}

export interface responseType<T> {
    data: T,
    msg: string,
    code: number
}