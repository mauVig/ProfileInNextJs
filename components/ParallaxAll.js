import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import logipartes from '../public/img/logipartes.jpg';
import dante from '../public/img/dante.jpg';

import st from '../styles/details.module.css'

export default function ParallaxLoesen({ name }) {
  const img = name === 'dante'      ? dante : '' || 
              name === 'logipartes' ? logipartes : '';
  return (
    <>
      <div className={`overflow-hidden ${st.diagonal}`}>
        <Parallax speed={-90}>
          <div className={`h-screen -z-10 `}>
            <Image src={img} alt='Logipartes' layout='fill' />
          </div>
        </Parallax>
      </div>
    </>
  );
}
