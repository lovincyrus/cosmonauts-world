/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class CosmonautsWorld extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/milky-way.png" />

          <meta property="og:site_name" content="Cosmonauts World" />
          <meta property="og:title" content="Cosmonauts World" />
          <meta property="og:description" content="Welcome! We're helping each other to learn more about the projects in the Cosmos and Tendermint Ecosystem." />
          <meta property="og:url" content="https://cosmonauts.world/" />

          <meta name="twitter:card" content="summary" />
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
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
