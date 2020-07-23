import React,{useState, useEffect} from 'react'
import styles from './Trending.module.css'

function Trending() {

    const API_KEY = 'h90vPPpGqNIgpsC4sv90L44Q9dlW3r0y';
const [trendingGif,setTrendingGif] = useState([])


useEffect(() => {
    fetchGif();
    return () =>{
      fetchGif()
    }
},[])



const fetchGif = async () => {
    const response = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=18&rating=g`)
    const data = await response.json();
    setTrendingGif(data.data)
  }
    return (
        <div className={styles.trendBody}>
            <div className={styles.innerTrend}>
            {trendingGif.map((trendGif) => (
                <div key={trendGif.id}>
                <img key={trendGif.id} className={styles.trendGifImages} src={trendGif.images.downsized.url} alt="gif"></img>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Trending
