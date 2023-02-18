export interface ResBase<T, Meta = {}> {
    data: T
    meta: {
        status: "success" |  "error",
        code: number
        message:  string
    } & Meta
}

export interface ReqBase<T> {
    data: T
}