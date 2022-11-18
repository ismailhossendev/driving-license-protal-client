import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [url])
    return [data, loading]
}
export default useFetch;