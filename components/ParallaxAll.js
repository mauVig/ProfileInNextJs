
import { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import st from '../styles/details.module.css';

export default function ParallaxLoesen({ name }) {
  const [who, setWho] = useState();

  const dante = '/img/dante.jpg';
  const matias = '/img/logipartes.jpg';

  useEffect(() => {
    if (name === 'dante') setWho(dante);
    if (name === 'logipartes') setWho(matias);
  }, []);
  return (
    <>
      <div className={`overflow-hidden ${st.diagonal}`}>
        <Parallax speed={-90}>
          <div className={`h-screen -z-10 `}>
            <img
              src={who}
              width='100%'
              alt={
                name === 'dante'
                  ? 'El es Dante Bronzini'
                  : 'Es el repositorio de Fabricante.logipartes.com.ar'
              }
            />
          </div>
        </Parallax>
      </div>
    </>
  );
}
