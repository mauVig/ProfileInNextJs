import { useEffect, useState } from 'react';
import { UseContextIdiom } from '../../context/ContextIdiom';
import LinkToPages from './LinksToPages';

export default function Recetas() {
  const { stateIdiom } = UseContextIdiom();
  const [len, setLen] = useState(stateIdiom);

  useEffect(() => {
    setLen(stateIdiom);
  }, [stateIdiom]);

  return (
    <>
      <article className='max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6 p-4 md:p-0'>
        <a
          href='https://bootcamp-git-main-mauvigs-projects.vercel.app/'
          target='_blanck'
          className='block'
        >
          <picture>
            <img src='/img/cocinero.png' alt='Logo de Pink' width={50} />
          </picture>
        </a>
        <div className='md:w-1/2'>
          <div className='flex items-center gap-3'>
            <a
              href='https://bootcamp-git-main-mauvigs-projects.vercel.app/'
              target='_blanck'
              className='flex items-center gap-3'
            >
              <div>
                <h2 className='text-3xl text-skin-500'>Recetas</h2>
                <p className='text-black-200'>Bootcamp</p>
              </div>
            </a>
          </div>
          <div>
            <p className='my-10 leading-9 text-lg italic tracking-wider'>
              &quot;
              {len ? (
                <>
                  Esta es una página hice en un{' '}
                  <strong className='text-skin-500'>bootcamp{' '}</strong>
                  dentro de la empresa <strong className='text-skin-500'> Accenture</strong>, desarrollando el front-end de una app dinámica. Utilicé tecnologías como React y Tailwind. 
                </>
              ) : (
                <>
                  This is a page I made in a{' '}
                  <strong className='text-skin-500'>bootcamp{' '}</strong>
                  within Accenture, developing the front-end of a dynamic application. It uses technologies like React and Tailwind.
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
    name: 'recetas.com.ar',
    href: 'https://bootcamp-git-main-mauvigs-projects.vercel.app/',
  },
];
