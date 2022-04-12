import entryStyle from "./Entry.module.css";
import { useRouter } from "next/router";
import React from "react";

const Entry = (props) => {
  
  const router=useRouter();

  const redirectHandler=()=>{
    router.push('/'+props.name);
  }


    return (
    <div className={entryStyle.div} onClick={redirectHandler}>
      
      <img src={props.link} />
      {props.name}
    </div>
  );
};

export default Entry;
