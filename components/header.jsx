import React from 'react';
import DarkModeToggle from './dark-mode-toggle';

const Header = ({ greeting }) => (
  <>
    <div className="bg-container">
      <DarkModeToggle />
      <h1 className="subpixel-antialiased font-sans text-white text-left font-bold text-xl md:text-3xl lg:text-4xl">
        Cosmonauts World
      </h1>
      <p className="pt-2 subpixel-antialiased max-w-full text-gray-300 text-lg">
        {greeting}
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
          href="https://twitter.com/CosmonautsWorld"
          target="blank_"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </p>
    </div>

    <style jsx>
      {`
        .bg-container {
          background-color: #485461;
          background-image: linear-gradient(315deg, #485461 0%, #2f363d 75%);
          padding: 40px;
          border-radius: 4px;
          position: relative;
        }

        @media screen and (max-width: 480px) {
          .bg-container {
            padding: 30px;
          }
        }
      `}
    </style>
  </>
);

export default Header;
