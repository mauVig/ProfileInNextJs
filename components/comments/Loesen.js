
import LinkToPages from './LinksToPages';

export default function Loesen() {
  return (
    <>
      <article className='flex items-start gap-6'>
        <a href='https://loesen.co/es' target='_blanck'>
          <img
            src='/img/matiasKochlowski.jpg'
            alt='Loesen'
            className=' rounded-lg'
            width={300}
            height={300}
          />
        </a>
        <div>
          <header className='flex items-center gap-3'>
            <a
              href='https://loesen.co/es'
              target='_blanck'
              className='flex items-center gap-3'
            >
              <img
                src='/img/loesen.png'
                alt='Matias Kochlowski'
                width={50}
                height={50}
                className='rounded-full'
              />
              <div>
                <h3 className='text-2xl text-skin-500'>Loesen</h3>
                <p className='text-black-200'>
                  Soluciones digitales para la posventa automotriz
                </p>
              </div>
            </a>
          </header>
          <div className=''>
            <p className='mt-6 text-lg'>
              &quot;Ha sido un placer trabajar con Mauro. Aprende rápido y
              trabaja bien con los demás. En su paso por Loesen ha progresado
              favorablemente en sus conocimientos de diseño front-end,
              TailwindCSS y NextJS. Ha demostrado habilidades para resolver
              problemas y ha hecho valiosas sugerencias sobre cómo mejorar
              nuestras aplicaciones.&quot;
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
