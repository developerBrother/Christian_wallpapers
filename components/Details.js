import React from "react";
import { useState, useEffect } from "react";
import detailsStyles from "./Details.module.css";
import { apiKey } from "../api";


const Details = (props) => {
  const [entry, changeData] = useState({});

  useEffect(() => {
    fetch(apiKey)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (const key in data) {
          if (data[key].name === props.id) {
            changeData({
              name: props.id,
              url: data[key].link,
            });
          }
        }
        console.log(entry);
      });
  }, []);

  return (
    <div className={detailsStyles.container}>
      <span className={detailsStyles.subcontainer}>
        <img src={entry.url} />
        <div className={detailsStyles.rightside}>
          <h1>{entry.name}</h1>
          <a href={entry.url} download>Download</a>
          
        </div>
      </span>
    </div>
  );
};

export default Details;
