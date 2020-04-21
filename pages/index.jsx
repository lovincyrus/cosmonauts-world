/* eslint-disable react/prop-types */
import * as React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Header from '../components/header';
import List from '../components/list';
import Footer from '../components/footer';

import { categories, mapping } from '../data/posts-manifest';

function Home() {
  return (
    <>
      <Head>
        <title>Cosmonauts World</title>
      </Head>

      <Navbar />

      <div className="py-10 p-5 mx-auto max-w-6xl">
        <Header />
        <List projects={mapping} projectCategories={categories} />
      </div>

      <Footer />
    </>
  );
}

export default Home;
