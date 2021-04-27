import JournalList from './JournalList'
import { useState, useEffect } from 'react'
import Axios from 'axios'

const Journal = () => {

    const [entries, setentries] = useState('')
    useEffect(() => {
        Axios({
            method:"GET",
            url: "http://localhost:4000/list-journal-entries",
            withCredentials:true
        }).then((res) => {
            setentries(res.data)
            // console.log(res.data)
        })

    }, [])

    return (
        // <div>
            <JournalList entries={entries} />
        // </div>
    )
}

export default Journal; 