import React from 'react';
import Head from 'next/head';

import '../styles/main.css';

const Header = () => (
  <>
    <div className="bg-container">
      <h1 className="subpixel-antialiased font-sans text-white text-left font-bold text-xl md:text-3xl lg:text-4xl">
        Cosmonauts World
      </h1>
      <p className="pt-2 subpixel-antialiased max-w-full text-gray-300 text-lg">
        Welcome! We&apos;re helping each other to learn more about the projects in
        the Cosmos and Tendermint Ecosystem.
      </p>
      <p className="pt-2 text-gray-400">
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
          background-image: url(/static/nasa.jpg);
          background-repeat: no-repeat;
          background-position: top left;
          padding: 40px;
          border-radius: 4px;
        }

        @media screen and (max-width: 500px) {
          .bg-container {
            padding: 30px;
          }
        }
      `}
    </style>
  </>
);

export default Header;
