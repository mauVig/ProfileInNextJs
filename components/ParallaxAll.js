import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
// import logipartes from '../public/img/logipartes.jpg';
// import dante from '../public/img/dante.jpg';

import st from '../styles/details.module.css'

export default function ParallaxLoesen({ name }) {
  // const img = name === 'dante'      ? dante : '' || 
  //             name === 'logipartes' ? logipartes : '';
  const [who, setWho] = useState();

  const dante = '/img/dante.jpg'
  const matias = '/img/logipartes.jpg'


  useEffect(()=>{
    if (name === 'dante' ) setWho(dante)
    if (name === 'logipartes' ) setWho(matias)
  },[])
  return (
    <>
      <div className={`overflow-hidden ${st.diagonal}`}>
        <Parallax speed={-90}>
          <div className={`h-screen -z-10 `}>
            <Image src={who} alt='Logipartes' layout='fill' />
          </div>
        </Parallax>
      </div>
    </>
  );
}
