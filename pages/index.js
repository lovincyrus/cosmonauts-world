import React from 'react'
import Head from 'next/head'
import Companies from '../components/companies'

import '../styles/main.css'

const Home = () => (
  <>
    <Head>
      <title>Cosmos & Tendermint Ecosystem</title>
    </Head>

    <div className='py-20'>
      <h1 className='font-sans text-lg text-gray-800 text-center font-bold'>Cosmos &amp; Tendermint Ecosystem</h1>

      <Companies />
    </div>

    <style jsx>
    {`
      * {
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif
        text-rendering: optimizelegibility
      }
    `}
    </style>
  </>
)

export default Home
