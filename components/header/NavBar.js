import { Menu, Transition } from '@headlessui/react';
import { useState } from 'react';
export default function NavBar() {
  return (
    <>
      <div className='sticky top-0 bg-black-600 z-50 '>
        <div className='max-w-7xl mx-auto'>
          <div className='flex justify-between items-center'>
            <span className='text-2xl text-skin-500 font-medium'>M</span>
            <div>
              <Menu>
                <Menu.Button className='text-skin-500 '>
                 Choose Lenguage
                </Menu.Button>
                <Transition
                  enter='transition-opacity duration-150'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='transition-opacity duration-550'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Menu.Items className='flex flex-col absolute divide-y-2'>
                    <Menu.Item className=' bg-skin-300 hover:bg-skin-400 text-black-500 text-center p-1 w-32'>
                      {({ active }) => (
                        <a
                          className={`${active && 'bg-blue-500'}`}
                          href='/account-settings'
                        >
                          Español
                        </a>
                      )}
                    </Menu.Item>                    
                    <Menu.Item className=' bg-skin-300 hover:bg-skin-400 text-black-500 text-center rounded-br-lg rounded-bl-lg p-1 w-32'>
                    {({ active }) => (
                        <a
                          className={`${active && 'bg-blue-500'}`}
                          href='/account-settings'
                        >
                          Ingles
                        </a>
                      )}
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
