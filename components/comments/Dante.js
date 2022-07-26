import LinkToPages from './LinksToPages';

export default function Dante({ len }) {
  return (
    <>
      <article className='flex flex-col md:flex-row  items-start gap-6 p-4 md:p-0'>
        <a href='https://dantebronzini.com.ar' target='_blanck'>
          <picture>
            <img
              src='/img/dantePerfil.jpg'
              alt='Dante Bronzini'
              className='rounded-lg'
              width={150}
            />
          </picture>
        </a>
        <div className='md:w-1/2'>
          <div className='flex items-center gap-3'>
            <a
              href='https://dantebronzini.com.ar'
              target='_blanck'
              className='flex items-center gap-3'
            >
              <picture>
              <img
                src='/img/rayo-page.png'
                alt='Un rayo, icono de Dante Bronzini'
                width={50}
                height={50}
                className='rounded-full'
              />
              </picture>
              <div>
                <h3 className='text-2xl text-skin-500'>Dante Bronzini</h3>
                <p className='text-black-200'>
                  {len
                    ? 'Productor y músico independiente'
                    : 'Independent producer and musician'}
                </p>
              </div>
            </a>
          </div>
          <div>
            <p className='mt-6 text-lg'>
              &quot;
              {len
                ? 'Le quiero agradecer a Mauro por la página que me hizo, realmente la necesitaba para trabajar. Me encanto el estilo y colores que uso, y como utilizó las fotos. Ahora tengo un lugar donde agregar toda la música nueva que hago, y también informar en los lugares que voy a tocar.'
                : `I want to say thank to Mauro for amazing page he made me. I really needed it to work. I love the styles and colors he used, and how he used the photos. Now I have a place to add all the new music i made, and also telling the people where are the places i'm going to play.`}
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
    name: 'Dantebronzini.com.ar',
    href: 'https://dantebronzini.com.ar/',
  },
];
