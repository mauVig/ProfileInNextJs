import { useState,useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [child,setChild]=useState(false)
  useEffect(()=>{
    setChild(true)
  },[])
  if(!child){
    return null
  }
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
