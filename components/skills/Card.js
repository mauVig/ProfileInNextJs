export default function Card(props) {
  return (
    <>
      <div className='drop-shadow-xl'>
        <div className='flex justify-center mb-4'>
        <props.icon className='text-5xl text-center' />
        </div>
        <h3 className='text-2xl text-center'>{props.name}</h3>
      </div>
    </>
  );
}
