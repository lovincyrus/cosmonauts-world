import React from 'react';
import Head from 'next/head';

import '../styles/main.css';

const Header = () => (
  <>
    <Head>
      <title>Cosmos & Tendermint Ecosystem</title>
    </Head>

    <div className="bg-container">
      <h1 className="subpixel-antialiased font-sans text-lg text-gray-800 text-left font-bold text-lg md:text-3xl lg:text-4xl">
          Cosmos &amp; Tendermint Ecosystem
      </h1>
      <p className="pt-1 subpixel-antialiased max-w-full text-gray-600 text-lg">
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

    <style jsx>
      {`
        .bg-container {
          background-image: linear-gradient(180deg,hsla(0,0%,100%,0) 50%,#fff),linear-gradient(70deg,#eaf5ff 32%,#f6fff8);
          padding: 20px;
          border-radius: 4px;
        }
      `}
    </style>
  </>
);

export default Header;
