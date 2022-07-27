/* eslint-disable react/jsx-key */
import {
  TbCloudDownload,
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandGithub,
} from 'react-icons/tb';

import st from '../../styles/details.module.css';

export default function Header({ len }) {
  return (
    <>
      <div
        className={`min-h-screen grid grid-cols-1 md:grid-cols-2  text-gray-500 ${st.efectHeader}`}
      >
        <picture className='flex md:justify-start justify-center items-center '>
          <img
            src='/img/full-stack-mauro-vigliero.png'
            alt='Mauro'
            layout='fill'
          />
        </picture>
        <div className='flex justify-center items-center py-40 md:py-0 '>
          <div>
            <h1 className={`text-5xl mb-10 mt-3 ${st.h1Trun}`}>
              <span className='text-skin-500'>M</span>auro{' '}
              <span className='text-skin-500'>V</span>igliero
            </h1>
            <p className=' text-xl mb-6'>
              {len ? `Soy desarrollador` : `I am developer`}
              <span className='text-skin-500 font-semibold'> Full-Stack</span>.
            </p>

            <p className=' text-xl mb-6 truncate'>
              {len
                ? `Cuento con el conocimiento para`
                : `I have the knowledge to`}{' '}
              <br />
              {len ? 'construir' : 'build'}{' '}
              <span className='text-skin-500 font-semibold'>
                {len ? 'Sitios Web y APPs' : 'Websites and APPs'}
              </span>
              .
            </p>
            <div className='flex my-12 -ml-7'>
              {net.map((link) => (
                <a
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:scale-125 transition-all text-skin-500 hover:text-skin-700'
                >
                  <link.icon className='text-4xl mx-6' />
                </a>
              ))}
            </div>
            <a
              className=' max-w-prose bg-skin-300 md:bg-skin-500 hover:bg-skin-700 block text-black-500 w-fit  pl-8 pr-11 pr-15 py-3 md:py-2  rounded-lg   transition-all duration-100'
              href={`/sources/Mauro-Vigliero-CV-2022${len ? '' : '-en'}.pdf`}
              target='_blanck'
            >
              <div className='flex items-center gap-2'>
                <TbCloudDownload className='text-lg' />
                <span className=' font-medium text-md'>
                  {len ? 'Descargar' : 'Download'} CV
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
const net = [
  {
    href: 'https://www.linkedin.com/in/maurovigliero/',
    icon: TbBrandLinkedin,
  },
  {
    href: 'https://www.instagram.com/maurook789/',
    icon: TbBrandInstagram,
  },
  {
    href: 'https://github.com/mauVig',
    icon: TbBrandGithub,
  },
];
