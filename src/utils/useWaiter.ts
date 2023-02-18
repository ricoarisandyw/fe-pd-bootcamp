import { useState } from "react"

// just a custom hooks to fetch single api
// if you planning on fetching so many times, use reactQuery or swr instead
const useWaiter = () => {
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    const load = () => {
        setLoading(true)
        setError(false)
    }
    const finish = () => setLoading(false)
    const error = () => setError(true)

    return {
        do: {
            load,
            finish,
            error
        },
        status: {
            error: isError,
            loading: isLoading
        }
    }
}

export default useWaiter