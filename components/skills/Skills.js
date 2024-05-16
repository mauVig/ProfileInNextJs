import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandBootstrap,
  TbBrandFirebase,
  TbBrandPhp,
  TbBrandVue,
} from 'react-icons/tb';
import { IoLogoNodejs } from 'react-icons/io';
import { SiMongodb, SiExpress, SiTypescript } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { FaAngular } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';
import { useMediaQuery } from 'react-responsive';
import { UseContextIdiom } from '../../context/ContextIdiom';
import st from '../../styles/details.module.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Card from './Card';
import { useEffect, useState } from 'react';

export default function Skills() {
  const { stateIdiom } = UseContextIdiom();
  const [len, setLen] = useState(stateIdiom);

  useEffect(() => {
    setLen(stateIdiom);
  }, [stateIdiom]);

  const cell = useMediaQuery({
    query: '(max-width: 550px)',
  });
  const tablet = useMediaQuery({
    query: '(max-width: 950px)',
  });

  return (
    <>
      <section>
        <h2 className='absolute invisible'>Skills</h2>
        <div className='flex justify-center my-20'>
          <div className='text-xl leading-9 max-w-lg p-4 md:p-0'>
            <p>
              {len
                ? 'Me encanta programar en cualquier lenguaje. Pero no solo es hacer, sino que también es aprender, estudiar, practicar, desafiarse a uno mismo. Disfruto del tiempo programando algún lenguaje, framework o librería.'
                : "I love programming in any language. But it's not only doing, it's also learning, studying, practising, challenging yourself. I always enjoy it when I'm programming, whether it is language, framework or library."}
            </p>
          </div>
        </div>
        <div className='w-full '>
          <h2 className='text-3xl text-center mb-26'>
            {len ? 'Lenguajes' : 'Skills'}
          </h2>
          <div className='py-20 hover:cursor-pointer'>
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
              className={`${st.blockSize} ${st.swiperH} `}
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
const skill = [
  {
    name: 'HTML 5',
    icon: TbBrandHtml5,
  },
  {
    name: 'CSS 3',
    icon: TbBrandCss3,
  },
  {
    name: 'JavaScript',
    icon: TbBrandJavascript,
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
  },
  {
    name: 'React Js',
    icon: TbBrandReactNative,
  },
  {
    name: 'Next js',
    icon: TbBrandNextjs,
  },
  {
    name: 'React Native',
    icon: TbBrandReactNative,
  },
  {
    name: 'Angular Js',
    icon: FaAngular,
  },
  {
    name: 'Tailwind Css',
    icon: TbBrandTailwind,
  },
  {
    name: 'Bootstrap',
    icon: TbBrandBootstrap,
  },
  {
    name: 'Node Js',
    icon: IoLogoNodejs,
  },
  {
    name: 'Mongo Db',
    icon: SiMongodb,
  },
  {
    name: 'Express',
    icon: SiExpress,
  },
  {
    name: 'Firebase',
    icon: TbBrandFirebase,
  },
  {
    name: 'PhP',
    icon: TbBrandPhp,
  },
  {
    name: 'My SQL',
    icon: GrMysql,
  },
  {
    name: 'Vue 3',
    icon: TbBrandVue,
  },
];
