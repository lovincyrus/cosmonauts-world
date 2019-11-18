import React from 'react';
import Head from 'next/head';
import Companies from '../components/companies';
import Header from '../components/header';

import '../styles/main.css';

const Home = () => (
  <>
    <Head>
      <title>Cosmonauts World</title>
    </Head>

    <div className="py-10 p-5 mx-auto max-w-6xl">
      <Header />
      <Companies />
    </div>
  </>
);

export default Home;
