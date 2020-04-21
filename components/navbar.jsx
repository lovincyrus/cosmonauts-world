import React from 'react';
import Badge from '@material-ui/core/Badge';

import { mapping } from '../data/posts-manifest';

const totalItemsCount = mapping.length;

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="menu">
            <a href="/">
              <Badge badgeContent={totalItemsCount} max={999} color="primary">
              Projects
              </Badge>
            </a>
          </div>
        </nav>
      </div>

      <style jsx>
        {`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
          padding-bottom: 1rem;
          padding-top: 1rem;
          box-shadow: inset 0 -1px 0 0 rgba(0,0,0,0.1);
          backdrop-filter: blur(5px);
        }

        .navbar {
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          font-size: 1.1rem;
        }

        .menu {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .menu a {
          display: block;
          margin-left: 3rem;
          margin-right: 3rem;
          padding: .5rem 0;
        }
      `}
      </style>
    </>
  );
}

export default Navbar;
