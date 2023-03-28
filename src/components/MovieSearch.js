import React from 'react'
import { useGlobal } from './Context'

export default function MovieSearch() {
    const { Usersearch, setUsersearch, setUserquary, setPage } = useGlobal()

    const callme = (e) => {
        e.preventDefault();
        setPage(1)
        setUserquary(Usersearch)
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h2 className='my-4'>Search Movies And WebSeries</h2>
                <form action="" onSubmit={callme}>
                    <input type="text" placeholder='Search' onChange={(e) => setUsersearch(e.target.value)} value={Usersearch} />
                </form>
            </div>
        </>
    )
}
