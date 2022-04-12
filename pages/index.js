import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import styles from '../styles/Home.module.css'



export default function Home() {
  let searchVal="string";
  
  console.log(searchVal);

  return (
   
    <div className={styles.container}>
      
      <Navbar/>
      <Gallery/>
      

    </div>
  )
}
