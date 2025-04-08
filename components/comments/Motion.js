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
        <a href='https://motionclinic.com.ar/' target='_blanck' className='block'>
          <picture>
            <img
              src='/img/motion.png'
              alt='Logo de Loesen'
              width={50}
              className='rounded-full'
            />
          </picture>
        </a>
        <div className='md:w-1/2'>
          <div className='flex items-center gap-3'>
            <a
              href='https://motionclinic.com.ar/'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-3'
            >
              <div>
                <h2 className='text-3xl text-skin-500'>Motion Clinic</h2>
                <p className='text-black-200'>
                  {len
                    ? 'Centro medico'
                    : 'Medical center'}
                </p>
              </div>
            </a>
          </div>
          <div>
            <p className='my-10 leading-9 text-lg italic tracking-wider'>
              &quot;
              {len ? (
                <>
                En este proyecto también utilicé tecnologías como 
                <span className='text-skin-600 font-semibold'> Astro </span>
                junto a 
                <span className='text-skin-600 font-semibold'>React</span> y 
                <span className='text-skin-600 font-semibold'>tailwind</span>. Pero lo que tengo que destacar de este sitio web es que a través del scroll se logró un gran dinamismo en la página.
                </>
              ) : (
                <>
                  In this project I also used technologies such as
                  <span className='text-skin-600 font-semibold'>
                    {' '}
                    Astro{' '}
                  </span>
                  along with <span className='text-skin-600 font-semibold'>React</span> and{' '}
                  <span className='text-skin-600 font-semibold'>tailwind</span>. But what I have to highlight about this website is that through the scroll a great dynamism was achieved on the page.
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
    name: 'motionclinic.com.ar',
    href: 'https://motionclinic.com.ar/',
  },
];
