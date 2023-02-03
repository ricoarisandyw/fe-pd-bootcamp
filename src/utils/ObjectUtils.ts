const ObjectUtils = {
    set: (object: any, field: string, value: any) => {
        Object.assign(object, { [field]: value })
    }
}

export default ObjectUtils