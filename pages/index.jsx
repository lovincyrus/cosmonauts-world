/* eslint-disable react/prop-types */
import * as React from 'react';
import Head from 'next/head';
// import { ThemeProvider } from 'styled-components';
// import useDarkMode from 'use-dark-mode';
import Header from '../components/header';
import List from '../components/list';
import Providers from '../components/providers';
// import { light, dark } from '../components/Theme/index';

import { categories, mapping } from '../data/posts-manifest';

import '../styles/main.css';

function Home() {
  return (
    <Providers>
      <Head>
        <title>Cosmonauts World</title>
      </Head>

      <div className="py-10 p-5 mx-auto max-w-6xl">
        <Header />

        <List projects={mapping} projectCategories={categories} />
      </div>
    </Providers>
  );
}

export default Home;
