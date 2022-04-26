import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../components/instructions.module.css';

 function instructions () {
  return (
      <div>
    <Navbar/>
    <div className={styles.container}>To download and use a wallpaper:
    <ul>
        <li>Click an image in the gallery</li>
        <li>Click the download button</li>
        <li>Right click the image</li>
        <li>Click "Save image as"</li>
        <li>Find the file where you saved the image</li>
        <li>Right click the file and select "Set as wallpaper"</li>
    </ul>
    
    </div>


    </div>
  )
}

export default instructions;
