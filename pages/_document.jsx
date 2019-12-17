/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class CosmonautsWorld extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="title" content="Cosmonauts World" />
          <meta
            name="description"
            content="Welcome! We're helping each other to learn more about the projects in the Cosmos and Tendermint Ecosystem."
          />

          <link rel="shortcut icon" href="/static/milky-way.png" />

          <meta property="og:site_name" content="Cosmonauts World" />
          <meta name="og:image" content="https://cosmonauts.world/static/nasa.jpg" />
          <meta property="og:title" content="Cosmonauts World" />
          <meta property="og:description" content="Welcome! We're helping each other to learn more about the projects in the Cosmos and Tendermint Ecosystem." />
          <meta property="og:url" content="https://cosmonauts.world/" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:image" content="https://cosmonauts.world/static/nasa.jpg" />
          <meta name="twitter:site" content="@cosmonautsworld" />
          <meta name="twitter:title" content="Cosmonauts World" />
          <meta name="twitter:description" content="Welcome! We're helping each other to learn more about the projects in the Cosmos and Tendermint Ecosystem." />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
          />
        </Head>
        <body>
          {/* https://github.com/donavon/use-dark-mode#that-flash */}
          <script src="/static/noflash.js" />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
