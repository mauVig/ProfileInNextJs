import Image from 'next/image';
import matias from '../../public/img/matiasKochlowski.jpg';
import dante from '../../public/img/rayo-page.png';
import LinkToPages from './LinksToPages';

export default function Dante() {
  return (
    <>
      <article className='flex items-start gap-6 mt-6'>
        <a href='https://dantebronzini.com.ar' target='_blanck'>
          <Image
            src={matias}
            alt='m'
            className=' rounded-lg'
            width={1000}
            height={1000}
          />
        </a>
        <div>
          <header className='flex items-center gap-3'>
            <a
              href='https://dantebronzini.com.ar'
              target='_blanck'
              className='flex items-center gap-3'
            >
              <Image
                src={dante}
                alt='Dante Bronzini'
                width={50}
                height={50}
                className='rounded-full'
              />
              <div>
                <h3 className='text-2xl text-skin-500'>Dante Bronzini</h3>
                <p className='text-black-200'>
                  Productor y músico independiente{' '}
                </p>
              </div>
            </a>
          </header>
          <div className=''>
            <p className='mt-6 text-lg'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In unde
              nesciunt iure minus dolor repellat recusandae repellendus
              officiis. Consequuntur corporis provident incidunt et nesciunt
              soluta quo! Deleniti omnis obcaecati corrupti. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. In unde nesciunt iure minus
              dolor repellat recusandae repellendus officiis. Consequuntur
              corporis provident incidunt et nesciunt soluta quo! Deleniti omnis
              obcaecati corrupti. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. In unde nesciunt iure minus dolor repellat
              recusandae repellendus officiis. Consequuntur corporis provident
              incidunt et nesciunt soluta quo! Deleniti omnis obcaecati
              corrupti. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. In unde nesciunt iure minus dolor repellat recusandae
              repellendus officiis. Consequuntur corporis provident incidunt et
              nesciunt soluta quo! Deleniti omnis obcaecati corrupti.
            </p>
          </div>
          <LinkToPages links={links} />
        </div>
      </article>
    </>
  );
}

const links = [
  {
    name: 'Dantebronzini.com.ar',
    href: 'https://dantebronzini.com.ar/',
  },
];
