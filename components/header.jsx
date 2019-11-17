import React from 'react';
import Head from 'next/head';

import '../styles/main.css';

const Header = () => (
  <>
    <Head>
      <title>Cosmonauts World</title>
    </Head>

    <div className="bg-container">
      <h1 className="subpixel-antialiased font-sans text-gray-800 text-left font-bold text-xl md:text-3xl lg:text-4xl">
        Cosmonauts World
      </h1>
      <p className="pt-1 subpixel-antialiased max-w-full text-gray-600 text-lg">
        Welcome! We&apos;re helping each other to learn more about the projects in
        the Cosmos and Tendermint Ecosystem.
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
        <span>  &#183; </span>
        <a
          href="https://github.com/lovincyrus/cosmonauts-world"
          target="blank_"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <span> &#183; </span>
        <a
          href="https://github.com/lovincyrus/cosmonauts-world#contribution"
          target="blank_"
          rel="noopener noreferrer"
        >
          Contribute
        </a>
      </p>
    </div>

    <style jsx>
      {`
        .bg-container {
          background-image: linear-gradient(
              180deg,
              hsla(0, 0%, 100%, 0) 50%,
              #fff
            ),
            linear-gradient(70deg, #eaf5ff 32%, #f6fff8);
          padding: 20px;
          border-radius: 4px;
        }
      `}
    </style>
  </>
);

export default Header;
