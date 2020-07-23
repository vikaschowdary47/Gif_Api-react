import React, { useState,useEffect } from 'react'
import styles from './Random.module.css'

function Random() {
    const [random,setRandom] = useState([])
    const API_KEY = 'h90vPPpGqNIgpsC4sv90L44Q9dlW3r0y'

    useEffect(() => {
            randomGifs();
    },[])


    const randomGifs = async () => {
       const response = await  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)
        const data = await response.json();

        setRandom(data.data.images.downsized)
    }


    return (
        <div className={styles.body}>
            <img className={styles.images} src={random.url} alt="gifs"></img>
        </div>
    )
}

export default Random
