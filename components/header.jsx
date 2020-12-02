import React from 'react';
import DarkModeToggle from './dark-mode-toggle';

const Header = () => (
  <>
    <div className="bg-container">
      <DarkModeToggle />
      <h1 className="subpixel-antialiased font-sans text-white text-left font-bold text-xl md:text-3xl lg:text-4xl">
        Cosmonauts World
      </h1>
      <p className="pt-2 subpixel-antialiased max-w-full text-gray-300 text-lg">
        The canonical list of the projects in the Cosmos and Tendermint ecosystem.
      </p>
      <p className="pt-2 text-gray-400 note">
        👉 We no longer accept any new submissions to update cosmonauts.world. For any new projects, please submit your information using
        {' '}
        <a href="https://airtable.com/shrHJJ4U4ChUxjILk" target="blank_" rel="noopener noreferrer">this Airtable form</a>
        <br />
        <br />
        View the
        {' '}
        <a href="https://airtable.com/shrapBPVHSLsfhKzk/tblii5D2VeOOFZA4c/viwDRWlFKDPpHZOII" target="blank_" rel="noopener noreferrer">Airtable spreadsheet</a>
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
          margin-top: 7vh;
        }

        a {
          color: #0070f3;
        }

        .note {
          margin-top: 1rem;
          border-color: #42b983;
          border-left-width: 0.5rem;
          border-left-style: solid;
          margin: 1rem 0;
          padding: .1rem 1.5rem;
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
