import { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import { useMediaQuery } from 'react-responsive';

import st from '../styles/details.module.css';

export default function ParallaxLoesen({ name }) {
  const [who, setWho] = useState();

  const cell = useMediaQuery({
    query: '(max-width: 550px)',
  });
  const tablet = useMediaQuery({
    query: '(max-width: 950px)',
  });
  const pc = useMediaQuery({
    query: '(min-width: 950px)',
  });

  useEffect(() => {
    if (name === 'dante') {
      if (pc) setWho('/img/danteBro.jpg');
      if (tablet) setWho('/img/danteBro-tablet.jpg');
      if (cell) setWho('/img/danteBro-cel.jpg');
    }
    if (name === 'logipartes') {
      if (pc) setWho('/img/logipartes.jpg');
      if (tablet) setWho('/img/logipartes-tablet.jpg');
      if (cell) setWho('/img/logipartes-cel.jpg');
    }
  }, []);
  return (
    <>
      <div className={`overflow-hidden ${st.diagonal}`}>
        <Parallax speed={-90}>
          <picture className={`h-screen -z-10 `}>
            <img
              src={who}
              width='100%'
              alt={
                name === 'dante'
                  ? 'El es Dante Bronzini'
                  : 'Es el repositorio de Fabricante.logipartes.com.ar'
              }
            />
          </picture>
        </Parallax>
      </div>
    </>
  );
}
