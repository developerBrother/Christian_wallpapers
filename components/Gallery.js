import React, { useState, useEffect} from "react";
import galleryStyles from './Gallery.module.css';
import Entry from "./Entry";
import { apiKey } from "../api";

const Gallery = () => {
  const [images, changeData] = useState([{}]);

  useEffect(() => {
    
    let loadedArr=[];

    fetch(apiKey)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (const key in data) {
          loadedArr.push({
            name: data[key].name,
            link: data[key].link,
          });
        }
        changeData(loadedArr);
      });
  }, []);

  return (
    <div className={galleryStyles.container}>
      <h1>Gallery</h1>
      <div className={galleryStyles.subcontainer}>
        {images.map(x=> <Entry key={Math.random()} name={x.name} link={x.link} />)}
      </div>
    </div>
  );
};

export default Gallery;
