import React,{useState, useEffect} from 'react'
import styles from './Header.module.css'
import axios from 'axios';


function Header() {
    const API_KEY='h90vPPpGqNIgpsC4sv90L44Q9dlW3r0y';
    const [searchGif,setSearchGif] = useState([]);
    const [query,setQuery] = useState('');
    const [search,setSearch] = useState('')


    useEffect(() => {
        searchGifs()
    },[query])

    const searchGifs= () => {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=5`)
        .then(res => {
            setSearchGif(res.data)
            // console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const submitSearch = e => {
        e.preventDefault();
        setQuery(search);
    }

    return (
        <div className={styles.header}>
        
            <div>
                <img className={styles.logo} src={require("./images/logo.png")} />
            </div>
            <div className={styles.form}>
                <form onSubmit={submitSearch}>
                    <input type="text" className={styles.inputSearch} value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                    <button className={styles.button} type="submit">Search</button>

                </form>
            </div>
        </div>
    )
}
 
export default Header
