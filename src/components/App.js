// create your App component here
import React, { useState, useEffect } from "react"

function App() {
    const [randomImage, setRandomImage] = useState('')
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            setRandomImage(data.message)
            setLoading(false)
        })
        .catch(error => {
            console.error(`Error Fetching:${error}`)
            setLoading(false)
        })
    }, [])
    return (
        <>
        {loading ? (<p>Loading...</p>) : (<img src={randomImage} alt="A Random Dog"/>)}
        </>
    )
}

export default App;