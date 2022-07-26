import { RiMailSendFill } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';

import ModalContact from './ModalContact';

export default function contact({ len }) {
  return (
    <>
      <div className='relative bg-gray-800 md:h-screen'>
        <picture className='h-56 bg-blue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 rounded-3xl'>
          <img
            className='w-full h-full object-cover'
            src='/img/space.jpg'
            alt='Imagen del espcio, representando que podemos trabajar a distancia'
            layout='fill'
          />
        </picture>
        <div className='relative max-w-7xl mx-auto px-4 py-12 lg:px-8 lg:py-16 h-full flex items-center'>
          <div className='md:ml-auto md:w-1/2 md:pl-10'>
            <h2 className='mt-2 text-skin-500 text-3xl sm:text-4xl'>
              {len ? 'Contacto' : 'Contact'}
            </h2>
            <ul className='mt-3 text-lg text-gray-500 my-4'>
              <li className='flex items-center lg:text-xl my-4'>
                <BiWorld className='mr-3' />
                {len
                  ? 'Podemos trabajar desde cualquier parte del mundo.'
                  : 'We can work from anywhere in the world.'}
              </li>
              <li className='flex items-center lg:text-xl my-4'>
                <RiMailSendFill className='mr-3' />
                {len
                  ? 'Mandame un mensaje, y charlemos.'
                  : `Send me a message, and let's chat.`}
              </li>
            </ul>
            <div className=''>
              <ModalContact len={len} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
