import Head from 'next/head';
import { useState, useEffect } from 'react';

import Header from '../components/header/Header';
import NavBar from '../components/header/NavBar';
import Skills from '../components/skills/Skills';
import Loesen from '../components/comments/Loesen';
import Dante from '../components/comments/Dante';
import ParallaxAll from '../components/ParallaxAll';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

import st from '../styles/details.module.css';

export default function Home() {
  const [lenguage, setLenguage] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('midiom')) {
      localStorage.getItem('midiom') === 'es'
        ? setLenguage(true)
        : setLenguage(false);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Mauro Vigliero</title>
      </Head>
      <NavBar len={lenguage} />
      <header
        className={`bg-black-500 w-full min-h-screen 
        z-40 relative ${st.headerBlock}`}
      >
        <div className='max-w-5xl mx-auto'>
          <Header len={lenguage} />
        </div>
      </header>
      <section className={`relative bg-skin-500 py-6 z-30 ${st.skillBefore}`}>
        <div className='max-w-7xl mx-auto '>
          <Skills len={lenguage} />
        </div>
      </section>

      {/* Testimonios */}
      <section className='relative bg-black-500 z-30 pt-44 '>
        <div className='max-w-7xl mx-auto text-gray-500  '>
          <h2 className='mb-14 text-3xl text-center mb-26'>
            {lenguage ? 'Experiencia' : 'Experience'}
          </h2>
          <div className='max-w-7xl mx-auto text-gray-500  '>
            <Loesen len={lenguage} />
          </div>
        </div>
      </section>
      <section className='relative bg-black-500'>
        <div className='text-gray-500'>
          <ParallaxAll name='logipartes' />
        </div>
      </section>

      <section className='relative bg-black-500 z-30 pt-44 '>
        <div className='max-w-7xl mx-auto text-gray-500 '>
          <Dante len={lenguage} />
        </div>
      </section>
      <section className='relative bg-black-500'>
        <div className='text-gray-500'>
          <ParallaxAll name='dante' />
        </div>
      </section>
      {/* Testimonios */}

      <section className='relative bg-black-500 z-30 overflow-hidden'>
        <Contact len={lenguage} />
      </section>
      <Footer len={lenguage} />
    </>
  );
}
