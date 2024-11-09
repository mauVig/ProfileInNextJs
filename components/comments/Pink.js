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
                <p className='text-black-200'>Visual studio</p>
              </div>
            </a>
          </div>
          <div>
            <p className='my-10 leading-9 text-lg italic tracking-wider'>
              &quot;
              {len ? (
                <>
                  Esta es una página
                  <strong className='text-skin-600'> Freelance </strong> que
                  construir para una agencia de diseño. Mi cliente me facilitó
                  el diseño completo, tanto como para Mobile y desktop. En este
                  proyecto utilizo
                  <span className='text-skin-600 font-semibold'> HTML </span>,
                  <span className='text-skin-600 font-semibold'> CSS </span>y
                  <span className='text-skin-600 font-semibold'>
                    {' '}
                    javascript
                  </span>
                  . Agregando tambien, una librería llamada
                  <a
                    href='https://swiperjs.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='text-skin-600 font-semibold'>
                      {' '}
                      Swiper{' '}
                    </span>
                  </a>
                  para hacer un slide y tambien use
                  <a
                    href='https://scrollrevealjs.org/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='text-skin-600 font-semibold'>
                      {' '}
                      ScrollReveal
                    </span>
                  </a>
                  .
                </>
              ) : (
                <>
                  This is a
                  <strong className='text-skin-500'> freelance </strong>
                  page to build for a design agency. To develop this website, my
                  client gave me the complete design for both Mobile and
                  desktop, and I decided to do this project with
                  <span className='text-skin-600 font-semibold'> HTML</span>,
                  <span className='text-skin-600 font-semibold'> CSS </span>
                  and
                  <span className='text-skin-600 font-semibold'>
                    {' '}
                    javascript
                  </span>
                  , adding a library called
                  <a
                    href='https://swiperjs.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='text-skin-600 font-semibold'>
                      {' '}
                      Swiper{' '}
                    </span>
                  </a>
                  to make a slide and also use
                  <a
                    href='https://scrollrevealjs.org/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='text-skin-600 font-semibold'>
                      {' '}
                      ScrollReveal
                    </span>
                  </a>
                  .
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
