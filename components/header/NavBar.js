import { Menu, Transition } from '@headlessui/react';
import { Arg, Usa } from './flags';
import { UseContextIdiom } from '../../context/ContextIdiom';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [len, setLen] = useState(stateIdiom);
  const { esp, eng, stateIdiom } = UseContextIdiom();

  const espaniol = () => {
    localStorage.setItem('midiom', 'es');
    esp();
  };

  const ingles = () => {
    localStorage.setItem('midiom', 'en');
    eng();
  };

  useEffect(() => {
    setLen(stateIdiom);
  }, [stateIdiom]);

  return (
    <>
      <div className='sticky top-0 bg-black-600 z-50 '>
        <div className='max-w-7xl mx-auto py-2 lg:py-0 px-4 xl:px-0'>
          <div className='flex justify-between items-center'>
            <a href='https://maurovigliero.com.ar/'>
              <span className='text-2xl text-skin-500 font-medium'>M</span>
            </a>
            <div>
              <Menu>
                <Menu.Button className='text-skin-500 hover:text-skin-700 '>
                  {len ? 'Choose lenguage' : 'Cambiar lenguaje'}
                </Menu.Button>
                <Transition
                  enter='transition-opacity duration-150'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='transition-opacity duration-550'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Menu.Items className='flex flex-col absolute divide-y-2 mt-1'>
                    <Menu.Item className='bg-skin-300 hover:bg-skin-400 text-black-500 text-center p-1 py-3 md:py-1 w-28'>
                      <button onClick={espaniol} className=''>
                        <Arg className='inline-block align-baseline w-4 mr-2' />
                        <span>ES</span>
                      </button>
                    </Menu.Item>
                    <Menu.Item className='bg-skin-300 hover:bg-skin-400 text-black-500 text-center p-1 py-3 md:py-1 rounded-br-lg rounded-bl-lg w-28'>
                      <button onClick={ingles}>
                        <Usa className='inline-block align-baseline ml-1 w-4 mr-2' />
                        <span>EN</span>
                      </button>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
