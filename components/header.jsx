import React from 'react';
// import DarkModeToggle from './dark-mode-toggle';

const Header = () => (
  <>
    <div className="bg-container">
      {/* <DarkModeToggle /> */}
      <h1 className="title subpixel-antialiased font-sans text-white text-left font-bold text-xl md:text-3xl lg:text-4xl">
        Cosmonauts World
      </h1>
      <p className="subtitle pt-2 subpixel-antialiased max-w-full text-gray-300 text-lg">
        <b>Long live Cosmos</b>
        {' '}
— We have moved to
        {' '}
        <a href="https://cosmos.network/ecosystem?ref=cosmonautsworld" target="blank_" rel="noopener noreferrer" className="gradient-text">cosmos.network/ecosystem</a>
        {' '}
🚀
        {' '}
      </p>
    </div>

    <style jsx>
      {`
        .bg-container {
          padding: 40px;
          border-radius: 4px;
          position: relative;
          display: grid;
          place-items: center;
          backdrop-filter: blur(3px);
        }

        a {
          font-weight: bold;
        }
        
        .gradient-text {
          /* standard gradient background */
          background: linear-gradient(135deg,#0f0d20,#040405 25%,#21224d 53%,#446eb7);

          /* clip hackery */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title, .subtitle {
          color: #10171d;
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
