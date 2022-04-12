import React from 'react'
import {useRouter} from 'next/router';
import Details from '../components/Details';
import Navbar from '../components/Navbar';

 function wallpaper(){

    const router=useRouter();
    console.log(router.query.wallpaper);

    return (
    <div>
        <Navbar/>
        <Details id={router.query.wallpaper}/>
        
    </div>
   
  )
}

export default wallpaper;

//don't lose data when refreshing
export async function getServerSideProps(context) {
    return {
        props: {},
    };
  }
  