import React from 'react';
import Head from 'next/head';
import Projects from '../components/projects';
import Header from '../components/header';

import '../styles/main.css';

const Home = () => (
  <>
    <Head>
      <title>Cosmonauts World</title>
    </Head>

    <div className="py-10 p-5 mx-auto max-w-6xl">
      <Header />
      <Projects />
    </div>
  </>
);

export default Home;
