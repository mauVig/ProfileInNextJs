import { useEffect, useState } from 'react';
import { UseContextIdiom } from '../../context/ContextIdiom';
import LinkToPages from './LinksToPages';

export default function Pink() {
  const { stateIdiom } = UseContextIdiom();
  const [len, setLen] = useState(stateIdiom);

  useEffect(() => {
    setLen(stateIdiom);
  }, [stateIdiom]);

  return (
    <>
      <article className='max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6 p-4 md:p-0'>
        <a href='https://lifeispink.org/' target='_blanck' className='block'>
          <picture>
            <img src='/img/pink.png' alt='Logo de Pink' width={50} />
          </picture>
        </a>
        <div className='md:w-1/2'>
          <div className='flex items-center gap-3'>
            <a
              href='https://lifeispink.org'
              target='_blanck'
              className='flex items-center gap-3'
            >
              <div>
                <h2 className='text-3xl text-skin-500'>Pink</h2>
                <p className='text-black-200'>
                  {len ? 'Estudio de diseño grafico' : 'Graphic design studio'} 
                </p>
              </div>
            </a>
          </div>
          <div>
            <p className='my-10 leading-9 text-lg italic tracking-wider'>
              &quot;
              {len ? (
                <>
                  En este proyecto tome la decisión de hacerlo solamente con <span className='text-skin-600 font-semibold'> HTML </span>,
                  <span className='text-skin-600 font-semibold'> CSS </span>y
                  <span className='text-skin-600 font-semibold'>
                    {' '}
                    JAVASCRIPT
                  </span>, sin ninguna ayuda de un framework. Para lograr la expresión artística de este sitio también quise que el código sea construido como si tallara a mano una escultura.
                </>
              ) : (
                <>
                  For this project I made the decision to do it only with 
                  <span className='text-skin-600 font-semibold'> HTML </span>,
                  <span className='text-skin-600 font-semibold'> CSS </span>y
                  <span className='text-skin-600 font-semibold'>
                    {' '}
                    JAVASCRIPT,
                  </span>{' '}
                  without any help from a framework. To achieve the artistic expression of this site I also wanted the code to be built as if I were carving a sculpture by hand.
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
    name: 'lifeispink.org',
    href: 'https://lifeispink.org',
  },
];
