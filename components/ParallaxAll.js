import { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import { useMediaQuery } from 'react-responsive';

import st from '../styles/details.module.css';

export default function ParallaxLoesen({ name }) {
  const [who, setWho] = useState();
  const [altText, setAltText] = useState({
    // dante: 'El es Dante Bronzini',
    logipartes: 'Es el repositorio de logipartes.com.ar',
    pink: 'Es el repositorio de lifeispink.org',
  })

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
    if (name === 'logipartes') {
      setAltText(altText['logipartes'])

      if (pc) setWho('/img/logipartes.png');
      if (tablet) setWho('/img/logipartes-tablet.png');
      if (cell) setWho('/img/logipartes-cel.png');
    }
    if (name === 'pink') {
      setAltText(altText['pink'])

      if (pc) setWho('/img/pink-desk.png');
      if (tablet) setWho('/img/pink-tablet.png');
      if (cell) setWho('/img/pink-cel.png');
    }
  }, []);
  
  return (
    <>
      <div className={`overflow-hidden ${st.diagonal}`}>
        <Parallax speed={-90}>
          <picture className={`-z-10 `}>
            <img
              src={who}
              width='100%'
              alt={altText}
            />
          </picture>
        </Parallax>
      </div>
    </>
  );
}
