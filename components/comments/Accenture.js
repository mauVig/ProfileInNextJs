import { useEffect, useState } from 'react';
import { UseContextIdiom } from '../../context/ContextIdiom';
import LinkToPages from './LinksToPages';

export default function Accenture() {
  const [len, setLen] = useState(stateIdiom);
  const { stateIdiom } = UseContextIdiom();

  useEffect(() => {
    setLen(stateIdiom);
  }, [stateIdiom]);

  return (
    <>
      <article className='max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6 p-4 md:p-0'>
        <a
          href='https://www.accenture.com/ar-es'
          target='_blanck'
          className='block'
        >
          <picture>
            <img src='/img/accenture-logo.png' alt='Logo de Pink' width={50} />
          </picture>
        </a>
        <div className='md:w-1/2'>
          <div className='flex items-center gap-3'>
            <a
              href='https://www.accenture.com/ar-es'
              target='_blanck'
              className='flex items-center gap-3'
            >
              <div>
                <h2 className='text-3xl text-skin-500'>Accenture</h2>
                <p className='text-black-200'>Empresa multinacional</p>
              </div>
            </a>
          </div>
          <div>
            <p className='my-8 text-lg italic leading-9 tracking-wider'>
              &quot;
              {len ? (
                <>
                  Estoy trabajando en esta empresa
                  <strong className='text-skin-600'>
                    {' '}
                    desde 2022 hasta la actualidad
                  </strong>
                  . Puedo decir que en este tiempo aprendí a trabajar en
                  proyectos con equipo increibles. Estuve en dos proyectos, el
                  primero trabajé con la tecnología
                  <span className='text-skin-600 font-semibold'> React </span>
                  haciendo una aplicación para hacer marketing a través de
                  <span className='text-skin-600 font-semibold'>
                  {' '}SharePoints
                  </span>
                  . Actualmente estoy trabajando con las tecnologías
                  <span className='text-skin-600 font-semibold'>{' '}Angular</span>,
                  <span className='text-skin-600 font-semibold'>{' '}
                    typescript
                  </span>{' '}
                  y{' '}<span className='text-skin-600 font-semibold'>ngrx</span>{' '}
                  haciendo una página para evaluar oportunidades de
                  negocios.
                </>
              ) : (
                <>
                  I have been working in this
                  <strong className='text-skin-500'>company</strong> since 2023,
                  and I currently continue to provide my services to this
                  company. I can say that during this time I learned how a
                  company of this size works and also how to work on projects
                  and as a team. I was in two projects, the first I worked with
                  React technology making an application so that the users who
                  use it can do marketing through SharePoint. And I am currently
                  working with angular, typescript and ngrx technologies making
                  a page to evaluate business opportunities.
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
    name: 'accenture.com/ar-es',
    href: 'https://www.accenture.com/ar-es',
  },
];
