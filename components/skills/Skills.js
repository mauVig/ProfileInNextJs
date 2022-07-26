import { skill } from './data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';
import { useMediaQuery } from 'react-responsive';

import st from '../../styles/details.module.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Card from './Card';

export default function Skills({ len }) {

  const cell = useMediaQuery({
    query: '(max-width: 550px)',
  });
  const tablet = useMediaQuery({
    query: '(max-width: 950px)',
  });
  

  return (
    <>
      <section>
        <h2 className='absolute hidden'>Skills</h2>
        <div className='flex justify-center my-32'>
          <div className='text-xl leading-9 max-w-lg p-4 md:p-0'>
            <p>
              {len
                ? 'Me encanta programar en cualquier lenguaje.'
                : 'I love programming in any language.'}
              <br />
              {len
                ? 'Pero no solo es hacer, sino que también es aprender, estudiar, practicar, desafiarse a uno mismo. Disfruto del tiempo cuando estudio algún lenguaje, framework o librería.'
                : 'But it´s not only doing, also is learning, studying, practicing, challenge yourself. I enjoy the time when I´m studying some language, framework or library.'}
            </p>
          </div>
        </div>
        <div className='w-full my-32'>
          <div className='p-6 hover:cursor-pointer'>
            <Swiper
              slidesPerView={tablet ? (cell ? 1.5 : 3) : 5}
              spaceBetween={20}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className={`${st.blockSize} ${st.swiperH} p-4 sm:p-0`}
              loop={true}
            >
              {skill.map((sk) => (
                <SwiperSlide
                  key={sk.name}
                  className=' border border-black-500 rounded-lg flex justify-center items-center mb-6 bg-white '
                >
                  <Card {...sk} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
