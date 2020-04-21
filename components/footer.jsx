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
            height: 22vh;
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
