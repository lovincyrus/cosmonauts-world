/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import List from '../components/list';
import { i18n, withTranslation } from '../i18n';

import { categories, mapping } from '../data/posts-manifest';

import '../styles/main.css';

const Home = ({ t }) => (
  <>
    <Head>
      <title>Cosmonauts World</title>
    </Head>

    <div className="lang">
      <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="en">en</option>
        <option value="cn">cn</option>
        <option value="kr">kr</option>
        <option value="ru">ru</option>
      </select>
    </div>

    <div className="py-10 p-5 mx-auto max-w-6xl">
      <Header greeting={t('greeting')} />
      <List projects={mapping} projectCategories={categories} />
    </div>

    <style jsx scoped>
      {`
        .lang {
          top: 0;
          right: 0;
          position: absolute;
          padding: 8px;
        }
      `}
    </style>
  </>
);

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Home);
