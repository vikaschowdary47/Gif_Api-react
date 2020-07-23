import React,{useState, useEffect} from 'react'
import styles from './Header.module.css'
import Giphy from './Giphy'


function Header() {
    const API_KEY='h90vPPpGqNIgpsC4sv90L44Q9dlW3r0y';
    const [searchGif,setSearchGif] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const [query,setQuery] = useState('funny');
    const [search,setSearch] = useState('')


    useEffect(() => {
        searchGifs()
        return () => {
            searchGifs()
        }
    },[])

    const searchGifs= async () => {
        const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=18`)
        const data = await response.json();
        setSearchGif(data.data)
        setIsLoading(false)
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
                    <input type="text" placeholder="Search your gifs" className={styles.inputSearch} value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                    <button className={styles.button} type="submit">Search</button>

                </form>
            </div>
            
        </div>
        <div>
                
        <Giphy key={searchGif.id} isLoading={isLoading} gifs={searchGif}/>
     </div>
     </div>
    )
}
 
export default Header
