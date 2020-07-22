import React,{useState, useEffect} from 'react'
import styles from './Trending.module.css'
import axios from 'axios'

function Trending() {

    const API_KEY = 'h90vPPpGqNIgpsC4sv90L44Q9dlW3r0y';
const [trendingGif,setTrendingGif] = useState([]);


useEffect(() => {
    fetchGif();
},[])



const fetchGif = () => {
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10&rating=g`)
    .then(res => {
      setTrendingGif(res.data.data)
    //   setIsLoading(false)
      console.log(res)
    })
    .then(data => {
        data.json();
        console.log(data);
    })
    .catch(err => {
      console.log(err)
    })
  }
    return (
        <div className={styles.trendBody}>
            <div className={styles.innerTrend}>
            {trendingGif.map((trendGif) => (
                <div>
                <img className={styles.trendGifImages} src={trendGif.images.downsized.url} alt="gif"></img>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Trending