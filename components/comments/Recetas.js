import { useEffect, useState } from 'react';
import { UseContextIdiom } from '../../context/ContextIdiom';
import LinkToPages from './LinksToPages';

export default function Recetas() {
  const [len, setLen] = useState(stateIdiom);
  const { stateIdiom } = UseContextIdiom();

  useEffect(() => {
    setLen(stateIdiom);
  }, [stateIdiom]);

  return (
    <>
      <article className='max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6 p-4 md:p-0'>
        <a href='https://bootcamp-git-main-mauvigs-projects.vercel.app/' target='_blanck' className='block'>
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
            <p className='my-6 text-lg italic tracking-wider'>
              &quot;
              {len ? (
                <>
                  Esta es una página hice en un &nbsp;
                  <strong className='text-skin-500'>bootcamp</strong>&nbsp; 
                  dentro de la empresa Accenture, creando el frontend de una app dinámica.  utilicé tecnologías como React y Tailwind. Pero al aprender typescript, tengo ganas de migrar toda la app a esta tecnología. cuando realicé este curso y hice la presentación final le pude demostrar a la empresa habilidades,  por eso hoy en día estoy en un proyecto grande de Accenture  en el cual trabajan aproximadamente 80 personas.
                </>
              ) : (
                <>
                  This is a page I made in a&nbsp;
                  <strong className='text-skin-500'>bootcamp</strong>&nbsp;
                  bootcamp within the company Accenture, creating the frontend of a dynamic app. I used technologies like React and Tailwind. But when learning typescript, I want to migrate the entire app to this technology. When I took this course and gave the final presentation I was able to demonstrate my skills to the company, which is why today I am in a large Accenture project in which approximately 80 people work.
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
