import { useRef, useEffect } from 'react';


import {
  TbCloudDownload,
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandGithub,
} from 'react-icons/tb';

import st from '../../styles/details.module.css';

export default function Header() {
  return (
    <>
      <header className='h-screen grid grid-cols-2 text-gray-500'>
        <div className='flex justify-start items-center'>
          <img
            src='/img/full-stack-mauro-vigliero.png'
            alt='Mauro'
            layout='fill'
          />
        </div>
        <div className='flex justify-center items-center'>
          <div>
            <h1 className={`text-5xl mb-10 mt-3 ${st.h1Trun}`}>
              <span className='text-skin-500'>M</span>auro{' '}
              <span className='text-skin-500'>V</span>igliero
            </h1>
            <p className=' text-xl mb-6'>
              Soy desarrollador
              <span className='text-skin-500 font-semibold'> Full-Stack</span>.
            </p>
            <p className=' text-xl mb-6 truncate'>
              Cuento con el conocimiento para <br /> construir{' '}
              <span className='text-skin-500 font-semibold'>
                Sitios Web y APPs
              </span>
              .
            </p>
            <div className='flex my-12'>
              <a href='#' className='hover:scale-125 transition-all -ml-1'>
                <TbBrandLinkedin className='text-skin-500 text-4xl mr-6' />
              </a>
              <a href='#' className='hover:scale-125 transition-all'>
                <TbBrandInstagram className='text-skin-500 text-4xl mx-6' />
              </a>
              <a href='#' className='hover:scale-125 transition-all'>
                <TbBrandGithub className='text-skin-500 text-4xl mx-6' />
              </a>
            </div>
            <button className='flex items-center bg-skin-500  text-black-500 pl-8 pr-11 pr-15 py-2  rounded-lg  hover:bg-skin-700 transition-all duration-100 '>
              <div className='flex items-center gap-2'>
                <TbCloudDownload className='text-lg' />
                <span className=' font-medium text-md'>Descargar CV</span>
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
