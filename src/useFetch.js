import {useState, useEffect } from 'react' 

const useFetch = (url) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("could not fetch")
            }
            return res.json()
        })
        .then(data => {
            setData(data);
        })
    }, [url]);

    return { data, setData }
   
}
 
export default useFetch;