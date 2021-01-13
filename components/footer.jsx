import * as React from 'react';

function Footer() {
  return (
    <>
      <footer>
        <img
          width={300}
          height={300}
          src="/static/to-the-stars.svg"
          alt="rocket"
          className="rocket"
        />
      </footer>

      <style jsx scoped>
        {`
          footer {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            z-index: -1;
          }

          .rocket {
            margin-top: 10rem;
            bottom: 0;
          }
      `}
      </style>
    </>
  );
}

export default Footer;
