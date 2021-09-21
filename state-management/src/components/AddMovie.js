import React, {useState, useContext} from 'react'
import {MovieContext} from './MovieContext'

function AddMovie() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [movies, setMovies] = useContext(MovieContext)

    const updateName = e => {
        setName(e.target.value)
    }

    const updatePrice = e => {
        setPrice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault()
        setMovies(prevMovies => [...prevMovies, {name: name, price: price, id: Math.random()*100000}])
        setName("")
        setPrice("")
    }

    return (
        <form onSubmit={addMovie}>
            <input onChange={updateName} value={name} type="text" />
            <input onChange={updatePrice} value={price} type="text" />
            <button>Submit</button>
        </form>

    )
}

export default AddMovie
