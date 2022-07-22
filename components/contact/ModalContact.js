/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoMdContacts } from 'react-icons/io';
import st from '../../styles/details.module.css';

export default function ModalContact({ len }) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const [all, setAll] = useState('');

  const nameLocal = 'formData';

  useEffect(() => {
    if (localStorage.getItem(nameLocal)) {
      setAll(JSON.parse(localStorage.getItem(nameLocal)));
      setName(all.name);
      setEmail(all.email);
      setText(all.text);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(nameLocal, JSON.stringify({ name, email, text }));
  }, [name, email, text]);

  return (
    <>
      <button
        className='flex items-center bg-skin-500  text-black-500 pl-7 pr-11 pr-15 py-2  rounded-lg  hover:bg-skin-700 transition-all duration-100 '
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

            {/* This element is to trick the browser into centering the modal contents. */}
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
                <div>
                  <div className='flex justify-center p-8'>
                    <div className='grid gap-8'>
                      <div>
                        <label className='text-sm'>
                          {len ? 'Nombre' : 'Name'}
                          <input
                            type='text'
                            className=' w-96 p-2 bg-black-300 text-white focus:outline-none'
                            onChange={(e) => setName(e.target.value)}
                            defaultValue={name}
                          />
                        </label>
                      </div>

                      <div>
                        <label className=' text-sm'>
                          Email
                          <input
                            type='text'
                            className='w-96 p-2 bg-black-300 text-white focus:outline-none'
                            onChange={(e) => setEmail(e.target.value)}
                            defaultValue={email}
                          />
                        </label>
                      </div>

                      <div>
                        <label className='text-sm'>
                          {len ? 'Mensaje' : 'Message'}
                          <textarea
                            type='text'
                            className={` w-96 p-2 bg-black-300 text-white focus:outline-none ${st.area}`}
                            onChange={(e) => setText(e.target.value)}
                            defaultValue={text}
                          />
                        </label>
                      </div>
                      <button className='bg-skin-500 hover:bg-skin-700 text-black-500 py-2 rounded-lg font-semibold'>
                        {len ? 'Enviar' : 'Send'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
