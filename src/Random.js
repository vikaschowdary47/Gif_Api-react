import React, { useState,useEffect } from 'react'
import axios from 'axios'
import styles from './Random.module.css'

function Random() {
    const [random,setRandom] = useState([])

    useEffect(() => {
            randomGifs();
    },[])


    const randomGifs = async () => {
       const response = await  fetch("https://api.giphy.com/v1/gifs/random?api_key=h90vPPpGqNIgpsC4sv90L44Q9dlW3r0y&tag=&rating=g")
        const data = await response.json();

        setRandom(data.data.images.downsized)
        console.log(data.data.images.downsized.url)
    }

    // const randomGifs = () => {
    //     axios.get("https://api.giphy.com/v1/gifs/random?api_key=h90vPPpGqNIgpsC4sv90L44Q9dlW3r0y&tag=&rating=g")
    //      .then(res => {f
    //         //  setRandom(res.data.data)
    //          console.log(res.data)
    //      })
    //      .then(data => {
    //          f
    //      })
    //      .catch(err => {
    //          console.log(err)
    //      })
    //  }
 

    return (
        <div className={styles.body}>
            <img className={styles.images} src={random.url}></img>
        </div>
    )
}

export default Random
