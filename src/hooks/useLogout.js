import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = () => {
        setError(null)
        setIsPending(true)

        try {
            dispatch({type: "LOGOUT"})
    
            setIsPending(false)
            setError(null)
            
        } catch (error) {
            console.log(error.message)
            setIsPending(false)
            setError(error.message)
        }
    }
    
    return {logout, error, isPending}
}