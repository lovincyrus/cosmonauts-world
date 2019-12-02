import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import List from '../components/list';

import { categories, mapping } from '../data/posts-manifest';

import '../styles/main.css';

function Home() {
  return (
    <>
      <Head>
        <title>Cosmonauts World</title>
      </Head>

      <div className="py-10 p-5 mx-auto max-w-6xl">
        <Header />

        <List projects={mapping} projectCategories={categories} />
      </div>
    </>
  );
}

export default Home;
