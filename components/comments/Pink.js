import { useEffect, useState } from 'react';
import { UseContextIdiom } from '../../context/ContextIdiom';
import LinkToPages from './LinksToPages';

export default function Pink() {
  const [len, setLen] = useState(stateIdiom);
  const { stateIdiom } = UseContextIdiom();

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
            <p className='my-6 text-lg italic tracking-wider'>
              &quot;
              {len ? (
                <>
                  Esta es una página &nbsp;
                  <strong className='text-skin-500'>freelance</strong>&nbsp; que
                  construir para una agencia de diseño. Para desarrollar esta
                  web, mi cliente me dio el diseño completo tanto como para
                  Mobile o desk, y yo decidí hacer este proyecto con html css y
                  javascript, agregando solamente una librería llamada Swiper
                  para hacer un slide.
                </>
              ) : (
                <>
                  This is a &nbsp;
                  <strong className='text-skin-500'>freelance</strong>&nbsp;
                  page to build for a design agency. To develop this website, my
                  client gave me the complete design for both Mobile and
                  desktop, and I decided to do this project with html css and
                  javascript, only adding a library called Swiper to make a
                  slide.
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
