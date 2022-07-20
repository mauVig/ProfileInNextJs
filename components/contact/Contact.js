import { RiMailSendFill } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';



import ModalContact from './ModalContact';

export default function contact() {
  return (
    <>
      <div className='relative bg-gray-800 h-screen'>
        <div className='h-56 bg-blue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 rounded-3xl'>
          <img
            className='w-full h-full object-cover'
            src='/img/playa.jpg'
            alt='AAAA'
            layout='fill'
          />
        </div>
        <div className='relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16 h-full flex items-center'>
          <div className='md:ml-auto md:w-1/2 md:pl-10'>
            <h2 className='mt-2 text-skin-500 text-3xl sm:text-4xl'>
              Contacto
            </h2>
            <ul className='mt-3 text-lg text-gray-500 my-4'>
              <li className='flex items-center text-xl my-4'>
                <BiWorld className='mr-3' />
                Podemos trabajar desde cualquier parte del mundo.
              </li>
              <li className='flex items-center text-xl my-4'>
                <RiMailSendFill className='mr-3' />
                Mandame un mensaje, y charlemos.
              </li>
            </ul>
            <div className=''>
              <ModalContact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
