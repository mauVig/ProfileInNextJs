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
            <p className='my-6 text-lg italic tracking-wider'>
              &quot;
              {len ? (
                <>
                  Estoy trabajando en esta &nbsp;
                  <strong className='text-skin-500'>empresa</strong>&nbsp; desde
                  2023, y actualmente continúo brindando mis servicios esta
                  empresa. Puedo decir que en este tiempo aprendí cómo funciona
                  una compañía de esta altura y también a trabajar en proyectos
                  y en equipo. Estuve en dos proyectos, el primero trabajé con
                  la tecnología
                    
                  &nbsp;<span className='text-skin-600 font-semibold'>React</span>&nbsp;

                   haciendo una aplicación para que los
                  usuarios que la utilicen pueden hacer marketing a través de
                  &nbsp;<span className='text-skin-600 font-semibold'>SharePoint</span>.
                   Y actualmente estoy trabajando con las tecnologías
                   &nbsp;<span className='text-skin-600 font-semibold'>angular</span>,
                   &nbsp;<span className='text-skin-600 font-semibold'>typescript</span>&nbsp;y
                   &nbsp;<span className='text-skin-600 font-semibold'>ngrx</span>&nbsp;
                   haciendo una página para evaluar
                  las oportunidades de negocios.
                </>
              ) : (
                <>
                  I have been working in this &nbsp;
                  <strong className='text-skin-500'>company</strong>&nbsp; since
                  2023, and I currently continue to provide my services to this
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
