import React from 'react'
import loading from './images/loading.gif'

function Spinner() {
    return (
        <img src={loading} style={{width: '200px', margin:'auto', display:'block'}}
        alt="loading..."></img>
    )
}

export default Spinner
