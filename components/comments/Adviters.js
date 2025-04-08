import { useEffect, useState } from 'react';
import { UseContextIdiom } from '../../context/ContextIdiom';
import LinkToPages from './LinksToPages';

export default function Adviters() {
  const { stateIdiom } = UseContextIdiom();
  const [len, setLen] = useState(stateIdiom);

  useEffect(() => {
    setLen(stateIdiom);
  }, [stateIdiom]);

  return (
    <>
      <article className='max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6 p-4 md:p-0'>
        <a href='https://adviters.com/' target='_blanck' className='block'>
          <picture>
            <img src='/img/Adviters-logo.png' alt='Logo de Adviters' width={50} />
          </picture>
        </a>
        <div className='md:w-1/2'>
          <div className='flex items-center gap-3'>
            <a
              href='https://adviters.com'
              target='_blanck'
              className='flex items-center gap-3'
            >
              <div>
                <h2 className='text-3xl text-skin-500'>Adviters</h2>
                <p className='text-black-200'>
                  {len ? 'Empresa nativa digital' : 'Digital native company'} 
                </p>
              </div>
            </a>
          </div>
          <div>
            <p className='my-10 leading-9 text-lg italic tracking-wider'>
              &quot;
              {len ? (
                <>
                    Realicé este proyecto utilizando las últimas tecnologías del mercado. Para el maquetado y el armado del proyecto utilicé el framework <span className='text-skin-600 font-semibold'>Astro</span> junto con la librería <span className='text-skin-600 font-semibold'>Tailwind</span>. este proyecto en particular puede lograr hacer varios <span className='text-skin-600 font-semibold'>efectos al hacer scroll</span>.
                </>
              ) : (
                <>
                    I made this project using the latest technologies on the market. For the layout and assembly of the project I used the <span className='text-skin-600 font-semibold'>Astro</span> framework along with the  <span className='text-skin-600 font-semibold'>Tailwind</span> library. This particular project can achieve several effects when scrolling.
                </>
              )}
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
    name: 'adviters.com',
    href: 'https://adviters.com/',
  },
];
