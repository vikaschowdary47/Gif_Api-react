import React from 'react';
import styles from './App.module.css';
import Header from './Header'
import Trending from './Trending';
import Random from './Random'

function App() {
  return (
    <div className="App">
      <div className={styles.container}>
        <Header />
        <Trending/>
        <Random />
        <footer>
        Vikas Chowdary
      </footer>
      </div>
      
    </div>
  );
}


export default App;
