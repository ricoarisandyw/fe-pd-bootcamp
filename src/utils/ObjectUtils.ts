const ObjectUtils = {
    set: (object: any, field: string, value: any) => {
        Object.assign(object, { [field]: value })
    },
    multiply<T>(size: number,  obj: T){
        return Array.from(Array(size)).map(() => obj)
    },
}

export default ObjectUtils