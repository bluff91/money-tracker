import { useState, useEffect } from "react"
import { useAuthContext } from "./useAuthContext"

export const useSignup = (url, method = 'GET') => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState(null)
  const { dispatch } = useAuthContext()
  
  function postData(postData) {
    setOptions({
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(postData)
    })
  }

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async (fetchOptions) => {
      setIsPending(true)
      
      try {
        const res = await fetch(url, {...fetchOptions, signal: controller.signal })
        if(!res.ok) {
          const errorText = await res.text()
          const displayErrorText = errorText.slice(8, -2)
            throw new Error(displayErrorText)
        }
        const data = await res.json()
        dispatch({type: "LOGIN",payload: data})

        setIsPending(false)
        setData(data)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError(`Error: ${err.message}`)
        }
      }
    }

   

    if (method === 'GET') {
      fetchData()
    }

    if (method === 'POST' && options) {
      fetchData(options)
    }

    return () => {
      controller.abort()
    }

  }, [url, options, method, dispatch])

  return { data, isPending, error, postData }
}