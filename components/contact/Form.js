import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import st from '../../styles/details.module.css';

export default function Form({ len, changToThx }) {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const [all, setAll] = useState('');

  const nameLocal = 'formData';

  const handlerSunmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_llrspx5',
        'template_a8dyom5',
        form.current,
        'lrI9ibdJlAO5ikn1J'
      )
      .then((data) => {
        changToThx();
        console.log('Emeil send, res: ' + data.text);
      });
    // (result) => {
    //   console.log(result.text);
    // },
    // (error) => {
    //   console.log(error.text);
    // }
  };

  useEffect(() => {
    if (localStorage.getItem(nameLocal)) {
      setAll(JSON.parse(localStorage.getItem(nameLocal)));
      setName(all.name);
      setEmail(all.email);
      setText(all.text);
    }
  }, []);

  () => {
    localStorage.setItem(nameLocal, JSON.stringify({ name, email, text }));
  },
    [name, email, text];

  return (
    <>
      <form ref={form} onSubmit={handlerSunmit}>
        <div className='flex justify-center p-4 sm:p-8'>
          <div className='grid gap-8 w-80 md:w-96'>
            <div>
              <label className='text-sm flex flex-col justify-start'>
                <span> {len ? 'Nombre' : 'Name'}</span>
                <input
                  type='text'
                  className=' p-2 bg-black-300 text-white focus:outline-none'
                  onChange={(e) => setName(e.target.value)}
                  defaultValue={name}
                  name='user_name'
                />
              </label>
            </div>
            <div>
              <label className='text-sm  flex flex-col justify-start'>
                <span> Email</span>
                <input
                  type='text'
                  className='p-2 bg-black-300 text-white focus:outline-none'
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={email}
                  name='user_email'
                />
              </label>
            </div>

            <div>
              <label className='text-sm flex flex-col justify-start'>
                <span> {len ? 'Mensaje' : 'Message'}</span>
                <textarea
                  type='text'
                  className={`md:w-96 p-2 bg-black-300 text-white focus:outline-none ${st.area}`}
                  onChange={(e) => setText(e.target.value)}
                  defaultValue={text}
                  name='message'
                />
              </label>
            </div>
            <button
              className='bg-skin-500 hover:bg-skin-700 text-black-500 py-2 rounded-lg font-semibold'
              type='submit'
            >
              {len ? 'Enviar' : 'Send'}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
