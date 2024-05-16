import { useEffect, useState } from 'react';
import { UseContextIdiom } from '../../context/ContextIdiom';
import LinkToPages from './LinksToPages';

export default function Loesen() {
  const [len, setLen] = useState(stateIdiom);
  const { stateIdiom } = UseContextIdiom();

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
              target='_blanck'
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
            <p className='my-6 text-lg italic tracking-wider'>
              &quot;
              {len ? (
                <>
                  Este fue mi primer trabajo en una &nbsp;
                  <strong className='text-skin-500'>empresa</strong>&nbsp; como
                  programador Frontend. Utilicé tecnologías
                  como
                  &nbsp;<span className='text-skin-600 font-semibold'>TailwindCSS</span>&nbsp;        
                   y 
                  &nbsp;<span className='text-skin-600 font-semibold'>NextJS</span>&nbsp;
                   , en varias páginas de la empresa.
                </>
              ) : (
                <>
                  This was my first job in a &nbsp;
                  <strong className='text-skin-500'>company</strong>&nbsp; as a
                  Frontend programmer. I used
                  technologies such as 
                  &nbsp;<span className='text-skin-600 font-semibold'>TailwindCSS</span>&nbsp;        
                   and 
                  &nbsp;<span className='text-skin-600 font-semibold'>NextJS</span>&nbsp;
                  , on several
                  company pages.
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
