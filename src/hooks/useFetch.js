import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [reLoad, setReload] = useState(false)

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
    }, [url, reLoad])
    return [data, loading, reLoad, setReload]
}
export default useFetch;