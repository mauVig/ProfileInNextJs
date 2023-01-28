import { useEffect, useState } from 'react';
import { UseContextIdiom } from '../../context/ContextIdiom';
import LinkToPages from './LinksToPages';

export default function Loesen() {
  const { stateIdiom } = UseContextIdiom();  
  const [len, setLen] = useState(stateIdiom);
  useEffect(() => {
    setLen(stateIdiom);
  }, [stateIdiom]);
  return (
    <>
      <article className='flex flex-col md:flex-row items-start gap-6 p-4 md:p-0'>
         <a href='https://loesen.co/es' target='_blanck' className='block'>
           <picture>
             <img
               src='/img/matiasKochlowski.jpg'
               alt='Loesen'
               className=' rounded-lg'
               width={150}
             />
           </picture>
         </a>
        <div className='md:w-1/2'>
          <div className='flex items-center gap-3'>
            <a
              href='https://loesen.co/es'
              target='_blanck'
              className='flex items-center gap-3'
            >
              <picture>
                <img
                  src='/img/loesen.png'
                  alt='Matias Kochlowski'
                  width={50}
                  className='rounded-full'
                />
              </picture>
              <div>
                <h2 className='text-2xl text-skin-500'>Loesen</h2>
                <p className='text-black-200'>
                  {len
                    ? 'Soluciones digitales para la posventa automotriz'
                    : 'Digital solutions for the automotive aftermarket'}
                </p>
              </div>
            </a>
          </div>
          <div>
            <p className='mt-6 text-lg italic tracking-wider'>
              &quot;
              {len
                ? 'Ha sido un placer trabajar con Mauro. Aprende rápido y trabaja bien con los demás. En su paso por Loesen ha progresado favorablemente en sus conocimientos de diseño front-end, TailwindCSS y NextJS. Ha demostrado habilidades para resolver problemas y ha hecho valiosas sugerencias sobre cómo mejorar nuestras aplicaciones.'
                : 'It has been a pleasure working with Mauro. Learn fast and works well with others. In this time at Loesen he has progressed favorably on his knowledge of front-end design, TailwindCSS and NextJS. He has demonstrated problem solving skills problems and has made valuable suggestions on how to improve our apps.'}
              &quot;
            </p>
          </div>
          <LinkToPages links={links} />
        </div>
      </article>
    </>
  );
}

const links = [
  {
    name: 'Logipartes.com.ar',
    href: 'https://logipartes.com.ar/',
  },
  {
    name: 'Fabricante.logipartes.com.ar',
    href: 'https://fabricante.logipartes.com.ar/',
  },
  {
    name: 'Casas.logipartes.com.ar',
    href: 'https://casas.logipartes.com.ar',
  },
];
