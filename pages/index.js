import { useState, useEffect } from 'react';
import Head from 'next/head';

import Header from '../components/header/Header';
import NavBar from '../components/header/NavBar';
import Skills from '../components/skills/Skills';
import Loesen from '../components/comments/Loesen';
import ParallaxAll from '../components/ParallaxAll';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Pink from '../components/comments/Pink';
import Recetas from '../components/comments/Recetas';
import Accenture from '../components/comments/Accenture';
import st from '../styles/details.module.css';

import { UseContextIdiom } from '../context/ContextIdiom';
import Adviters from '../components/comments/Adviters';

export default function Home() {
  const { stateIdiom } = UseContextIdiom();
  const [len, setLen] = useState(stateIdiom);

  useEffect(() => {
    setLen(stateIdiom);
  }, [stateIdiom]);

  return (
    <>
      <Head>
        <title>Mauro Vigliero</title>
      </Head>
      <NavBar />
      <header
        className={`bg-black-500 w-full min-h-screen 
        z-40 relative ${st.headerBlock}`}
      >
        <div className='max-w-5xl mx-auto'>
          <Header />
        </div>
      </header>
      <section className={`relative bg-skin-500 py-6 z-30 ${st.skillBefore}`}>
        <div className='max-w-7xl mx-auto '>
          <Skills />
        </div>
      </section>

      <section className='relative bg-black-500 z-30 pt-20 text-gray-500'>
        <h2 className='pb-14 text-4xl text-center mb-26'>
          {len ? 'Experiencia' : 'Experience'}
        </h2>
      </section>

      <div className=' text-gray-500 bg-black-500 pt-[8rem]'>
        <Adviters />
      </div>
      <section className='relative bg-black-500'>
        <div className='text-gray-500'>
          <ParallaxAll name='adviters' />
        </div>
      </section>

      <div className=' text-gray-500 bg-black-500 pt-[8rem]'>
        <Pink />
      </div>
      <section className='relative bg-black-500'>
        <div className='text-gray-500'>
          <ParallaxAll name='pink' />
        </div>
      </section>

      <div className=' text-gray-500 bg-black-500 pt-[8rem]'>
        <Accenture />
      </div>
      <section className='relative bg-black-500'>
        <div className='text-gray-500'>
          <ParallaxAll name='accenture' />
        </div>
      </section>
      <div className=' text-gray-500 bg-black-500'>
        <Loesen />
      </div>
      <section className='relative bg-black-500'>
        <div className='text-gray-500'>
          <ParallaxAll name='logipartes' />
        </div>
      </section>
      <div className=' text-gray-500 bg-black-500 pt-[8rem]'>
        <Recetas />
      </div>
      <section className='relative bg-black-500'>
        <div className='text-gray-500'>
          <ParallaxAll name='recetas' />
        </div>
      </section>

      <section className='relative bg-black-500 z-30 overflow-hidden'>
        <Contact />
      </section>
      <Footer />
    </>
  );
}
