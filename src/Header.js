import React,{useState, useEffect} from 'react'
import styles from './Header.module.css'
import axios from 'axios'
import Giphy from './Giphy'


function Header() {
    const API_KEY='h90vPPpGqNIgpsC4sv90L44Q9dlW3r0y';
    const [searchGif,setSearchGif] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const [query,setQuery] = useState('random');
    const [search,setSearch] = useState('')


    useEffect(() => {
        searchGifs()
    },[query])

    const searchGifs= () => {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=20`)
        .then(res => {
            setSearchGif(res.data.data)
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const submitSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('')
    }

    return (
        <div >
        <div className={styles.header}>
         <div>
                <img className={styles.logo} src={require("./images/logo.png")} alt='gif' />
            </div>
            <div className={styles.form}>
                <form onSubmit={submitSearch}>
                    <input type="text" className={styles.inputSearch} value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                    <button className={styles.button} type="submit">Search</button>

                </form>
            </div>
            
        </div>
        <div className>
                
        <Giphy isLoading={isLoading} gifs={searchGif}/>
     </div>
     </div>
    )
}
 
export default Header
