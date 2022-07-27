import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoMdContacts } from 'react-icons/io';
import Form from './Form';
import ThxMsg from './ThxMsg';
export default function ModalContact({ len }) {
  const [open, setOpen] = useState(false);
  const [thx, setThx] = useState(false);
  const changToThx = () => {
    setThx((x) => !x);
  };
  return (
    <>
      <button
        className='flex items-center bg-skin-500  text-black-500 pl-7 pr-11 pr-15 py-2  rounded-lg  hover:bg-skin-700 transition-all duration-100'
        onClick={() => setOpen((x) => !x)}
      >
        <div className='flex items-center gap-2'>
          <IoMdContacts className='text-lg' />
          <span className=' font-medium text-md'>
            {len ? 'Contacto' : 'Contact'}
          </span>
        </div>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          static
          className='fixed z-50 inset-0 overflow-y-auto'
          open={open}
          onClose={setOpen}
        >
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed left-0 top-0 bottom-0 w-full bg-black-300 bg-opacity-75 transition-opacity' />
            </Transition.Child>
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='inline-block align-bottom bg-black-500 text-gray-500  rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-md sm:w-full sm:p-6'>
                {!thx && <Form len={len} changToThx={changToThx} />}
                {thx && <ThxMsg len={len} />}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
