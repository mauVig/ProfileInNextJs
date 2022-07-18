import Image from 'next/image';
import matias from '../../public/img/matiasKochlowski.jpg';
import loesen from '../../public/img/loesen.png';
import LinkToPages from './LinksToPages'

export default function Loesen() {
  return (
    <>
      <article className='flex items-start gap-6 mt-6 '>
        <Image
          src={matias}
          alt='m'
          className=' rounded-lg'
          width={300}
          height={300}
        />
        <div>
          <header className='flex items-center gap-3'>
            <a
              href='https://loesen.co/es'
              target='_blanck'
              className='flex items-center gap-3'
            > 
              <Image
                src={loesen}
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
            <p className='mt-6 text-lg'>&quot;Ha sido un placer trabajar con Mauro. Aprende rápido y trabaja bien con los demás. En su paso por Loesen ha progresado favorablemente en sus conocimientos de diseño front-end, TailwindCSS y NextJS. Ha demostrado habilidades para resolver problemas y ha hecho valiosas sugerencias sobre cómo mejorar nuestras aplicaciones.&quot;</p>
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
