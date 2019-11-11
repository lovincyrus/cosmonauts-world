import React from 'react'
import Head from 'next/head'
import Companies from '../components/companies'
// import BackToTop from '../components/backtotop'

import '../styles/main.css'

const Home = () => (
  <>
    <Head>
      <title>Cosmos & Tendermint Ecosystem</title>
    </Head>

    <div className='py-25 p-5 mx-auto wrapper'>
      <h1 className='subpixel-antialiased font-sans text-lg text-gray-800 text-left font-bold text-2xl'>Cosmos &amp; Tendermint Ecosystem</h1>
      <p className="pt-1 subpixel-antialiased max-w-full text-gray-600 text-xl">Note: List of active projects in the cosmos ecosystem are curated best to the knowledge of the community. Everyone should maintain caution and exercise due to diligence when researching new projects beyond provided here informations.</p>
      <p className="pt-2 text-gray-500">Built by <a href="https://github.com/lovincyrus">@lovincyrus</a></p>

      <Companies />
    </div>

    <style jsx>
    {`
      * {
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
      }

      .wrapper {
        max-width: 76em;
      }
    `}
    </style>
  </>
)

export default Home
