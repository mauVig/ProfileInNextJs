import { skill } from '../data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';

import st from '../../styles/details.module.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Card from './Card';

export default function Skills() {
  return (
    <>
      <section>
        <h2 className='absolute hidden'>Skills</h2>
        <div className='flex justify-center my-32'>
          <div className='text-xl leading-9 max-w-lg'>
            <p >
              Me encanta programar en cualquier lenguaje.
              <br /> Pero no solo es hacer, sino que también es aprender,
              estudiar, practicar, desafiarse a uno mismo.
            </p>
            <p>
              Disfruto del tiempo cuando estudio algún <span>lenguaje</span>,{' '}
              <span>framework</span> o <span>Librerías</span>.
            </p>
          </div>
        </div>
        <div className='w-full my-32'>
          <div className='p-6'>
            <Swiper
              slidesPerView={5}
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
              className={st.swiperH}
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
