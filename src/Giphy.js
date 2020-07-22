import React from 'react'
import styles from './Giphy.module.css'

const Giphy = ({gifs, isLoading}) => {
    
    return isLoading ? (<h1>loading...</h1>) : 
    (<div className={styles.cards}>
        {gifs.map((gif) => (
            <img src={gif.images.downsized.url} alt="gif"></img>
        ))}
        
         </div> )
}

export default Giphy
