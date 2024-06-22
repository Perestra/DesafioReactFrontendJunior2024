import { AxiosInstance, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type UseAxiosResult<T> = {
    data: T | null;
    isLoading: boolean;
    error: string | null;
}

type AxiosMethod = 'get' | 'post' ;

export function useAxios<T>(axiosInstance: AxiosInstance, method: AxiosMethod, url: string): UseAxiosResult<T> { 

    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect( () => {
        const fetchData = async () => {
            try {
                const res: AxiosResponse<T> = await 
                    axiosInstance
                    [method]
                    (url)
                setData(res.data)
            } catch(err) {
                setError((err as Error).message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
            
    }, [] )

    return { data, isLoading, error };
}
