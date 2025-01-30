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
      <article className='max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6 p-4 md:p-0'>
        <a href='https://loesen.co/es' target='_blanck' className='block'>
          <picture>
            <img
              src='/img/loesen.png'
              alt='Logo de Loesen'
              width={50}
              className='rounded-full'
            />
          </picture>
        </a>
        <div className='md:w-1/2'>
          <div className='flex items-center gap-3'>
            <a
              href='https://loesen.co/es'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-3'
            >
              <div>
                <h2 className='text-3xl text-skin-500'>Loesen</h2>
                <p className='text-black-200'>
                  {len
                    ? 'Soluciones digitales para la posventa automotriz'
                    : 'Digital solutions for the automotive aftermarket'}
                </p>
              </div>
            </a>
          </div>
          <div>
            <p className='my-10 leading-9 text-lg italic tracking-wider'>
              &quot;
              {len ? (
                <>
                  Esta empresa fue en donde tuve mi primer trabajo como desarrollador
                  Front-end. Utilicé tecnologías como
                  <span className='text-skin-600 font-semibold'>
                    {' '}
                    TailwindCSS{' '}
                  </span>{' '}
                  y <span className='text-skin-600 font-semibold'>NextJS</span>.
                </>
              ) : (
                <>
                  This was my first job in a company as a Front-end programmer.
                  I used technologies such as
                  <span className='text-skin-600 font-semibold'>
                    {' '}
                    TailwindCSS{' '}
                  </span>
                  and{' '}
                  <span className='text-skin-600 font-semibold'>NextJS</span>,
                  on some company pages.
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
