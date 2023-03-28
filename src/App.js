import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Singlemovie from './components/Singlemovie'
import Error from './components/Error'

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='movies/:id' element={<Singlemovie />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}
