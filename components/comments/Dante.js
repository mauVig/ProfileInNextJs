import Image from 'next/image';
import perfil from '../../public/img/dantePerfil.jpg';
import dante from '../../public/img/rayo-page.png';
import LinkToPages from './LinksToPages';

export default function Dante() {
  return (
    <>
      <article className='flex items-start gap-6 '>
        <a href='https://dantebronzini.com.ar' target='_blanck'>
          <Image
            src={perfil}
            alt='m'
            className='rounded-lg'
            width={300}
            height={300}
          />
        </a>
        <div>
          <header className='flex items-center gap-3'>
            <a
              href='https://dantebronzini.com.ar'
              target='_blanck'
              className='flex items-center gap-3'
            >
              <Image
                src={dante}
                alt='Dante Bronzini'
                width={50}
                height={50}
                className='rounded-full'
              />
              <div>
                <h3 className='text-2xl text-skin-500'>Dante Bronzini</h3>
                <p className='text-black-200'>
                  Productor y músico independiente{' '}
                </p>
              </div>
            </a>
          </header>
          <div className=''>
            <p className='mt-6 text-lg'>
            &quot;Le quiero agradecer a Mauro por la página que me hizo, realmente la necesitaba para trabajar. Me encanto el estilo y colores que uso, y como utilizó las fotos. Ahora tengo un lugar donde agregar toda la música nueva que hago, y también informar en los lugares que voy a tocar.&quot;
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
