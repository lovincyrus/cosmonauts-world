import React from 'react';
import Head from 'next/head';
import Companies from '../components/companies';
import Header from '../components/header';

import '../styles/main.css';

const Home = () => (
  <>
    <Head>
      <title>Cosmos & Tendermint Ecosystem</title>
    </Head>

    <div className="py-10 p-5 mx-auto max-w-6xl">
      <Header />
      <Companies />
    </div>

    <style jsx>
      {`
        .bg-container {
          background-color: aliceblue;
          padding: 20px;
          border-radius: 4px;
        }
      `}
    </style>
  </>
);

export default Home;
