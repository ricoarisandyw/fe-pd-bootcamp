const ValidationUtils = {
    isEmpty: (value: any) => {
        if(value === undefined) return true
        if(value === null) return true
        if(value === '') return true
        return false
    },
    containNumber: (value: string) => /[0-9]/.test(value),
    containCharacter: (value: string) => /[a-zA-Z]/.test(value)
}

export default ValidationUtils