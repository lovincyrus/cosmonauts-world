import React from 'react';
import Head from 'next/head';
import Companies from '../components/companies';
import Header from '../components/header';

import '../styles/main.css';

const Home = () => (
  <>
    <Head>
      <title>Cosmonauts World</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Welcome! We're helping each other to learn more about the projects in the Cosmos and Tendermint Ecosystem."
      />
    </Head>

    <div className="py-10 p-5 mx-auto max-w-6xl">
      <Header />
      <Companies />
    </div>
  </>
);

export default Home;
