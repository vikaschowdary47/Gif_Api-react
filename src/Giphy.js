import React from 'react'
import styles from './Giphy.module.css'
import Spinner from './Spinner'

const Giphy = ({gifs, isLoading}) => {
    
    return isLoading ? (<Spinner />) : 
    (<div className={styles.body}>
    <div className={styles.cards}>
        {gifs.map((gif) => (
            <img className={styles.image} src={gif.images.downsized.url} alt="gif"></img>
        ))}
        
         </div> 
         </div>)
}

export default Giphy
