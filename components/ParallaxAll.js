import { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import { useMediaQuery } from 'react-responsive';

import st from '../styles/details.module.css';

export default function ParallaxLoesen({ name }) {
  const [who, setWho] = useState();
  const [altText, setAltText] = useState({
    logipartes: 'Es el repositorio de logipartes.com.ar',
    pink: 'Es el repositorio de lifeispink.org',
    recetas: 'Es el repositorio del bootcamp recetas',
    accenture: 'Es el repositorio del bootcamp de Accenture',
  });

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
    setAltText(altText[name]);

    if (pc) setWho(`/img/${name}-desk.png`);
    if (tablet) setWho(`/img/${name}-tablet.png`);
    if (cell) setWho(`/img/${name}-cel.png`);
  }, []);

  return (
    <>
      <div className={`overflow-hidden ${st.diagonal}`}>
        <Parallax speed={-90}>
          <picture className={`-z-10 `}>
            <img src={who} width='100%' alt={altText} />
          </picture>
        </Parallax>
      </div>
    </>
  );
}
