import React from 'react';
import styles from './App.module.css';
import Header from './Header'
// import Giphy from './Giphy';
import Trending from './Trending';

function App() {
  // const [isLoading,setIsLoading] = useState(true);
  return (
    <div className="App">
      <div className={styles.container}>
        <Header />
        <Trending />
    
      </div>
    </div>
  );
}

export default App;
