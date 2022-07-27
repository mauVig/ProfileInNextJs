export default function Thx({ len }) {
  return (
    <>
      <div className='text-center'>
        <span className='text-2xl'>&#128536;&#128536;&#128536;</span>
        <p className='text-xl text-skin-500'>
          {len
            ? 'Gracias por comunicarte!'
            : 'Thank you for communicating whit me'}
        </p>
        <p className='text-lg text-gray-500'>
          {len ? 'Te contestare el mensaje' : 'I will answer your message'}
        </p>
      </div>
    </>
  );
}
