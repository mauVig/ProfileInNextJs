// import Head from 'next/head'

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
  return (
    <>
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

      {/* Testimonios */}
      <section className='relative bg-black-500 z-30 pt-44 '>
        <div className='max-w-7xl mx-auto text-gray-500  '>
          <h2 className=' absolute hidden'>Experiencia</h2>
          <div className='max-w-7xl mx-auto text-gray-500  '>
            <Loesen />
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
          <Dante />
        </div>
      </section>
      <section className='relative bg-black-500'>
        <div className='text-gray-500'>
          <ParallaxAll name='dante' />
        </div>
      </section>
      {/* Testimonios */}

      <section className='relative bg-black-500 z-30 overflow-hidden'>
        <Contact />
      </section>
      <Footer />
    </>
  );
}
