import React from 'react';
import Head from 'next/head';
import Companies from '../components/companies';

import '../styles/main.css';

const Home = () => (
  <>
    <Head>
      <title>Cosmos & Tendermint Ecosystem</title>
    </Head>

    <div className="py-10 p-5 mx-auto max-w-6xl">
      <div className="bg-container">
        <h1 className="subpixel-antialiased font-sans text-lg text-gray-800 text-left font-bold text-4xl">
          Cosmos &amp; Tendermint Ecosystem
        </h1>
        <p className="pt-1 subpixel-antialiased max-w-full text-gray-600 text-xl">
          Note: List of active projects in the cosmos ecosystem are curated best
          to the knowledge of the community. Everyone should maintain caution and
          exercise due diligence when researching new projects beyond provided
          informations.
        </p>
        <p className="pt-2 text-gray-500">
          Built by
          {' '}
          <a
            href="https://github.com/lovincyrus"
            target="blank_"
            rel="noopener noreferrer"
          >
            @lovincyrus
          </a>
        </p>
      </div>

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
