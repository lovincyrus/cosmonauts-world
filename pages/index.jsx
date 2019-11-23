import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Filter from '../components/filter';
import List from '../components/list';

import '../styles/main.css';

const Index = () => (
  <>
    <div>
      <Head>
        <title>Cosmonauts World</title>
      </Head>

      <div className="py-10 p-5 mx-auto max-w-6xl">
        <Header />
        <Filter />
        <List />
      </div>
    </div>
  </>
);

export default Index;
