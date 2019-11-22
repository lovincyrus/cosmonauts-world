/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';

import { mapping } from '../../data/posts-manifest';

import '../../styles/main.css';

const currentUrl = window.location.href;
const easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing },
  },
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing,
    },
  },
};

const Post = ({ post, keys }) => (
  <div className="pt-32 p-5 mx-auto">
    <motion.div initial="exit" animate="enter" exit="exit">
      <Head>
        <title>
          {post.name}
          {' '}
          &#183; Cosmonauts World
        </title>
      </Head>

      <motion.div variants={textVariants}>
        <p className="text-5xl font-bold text-gray-800 text-center">
          {post.name}
        </p>

        {post.verified === 'true' ? (<p className="pt-5 text-center">Verified by cosmonauts! 👩‍🚀</p>) : ('')}

        <div className="icons-container">
          {keys.map((item, index) => (
            <a href={post.links[item]} target="blank_" rel="noopener noreferrer" className="icon-item" key={index}>
              <img
                width={35}
                height={35}
                src={`/static/icons/${item}.svg`}
                alt={item}
              />
            </a>
          ))}
        </div>

        <p className="text-center text-gray-800 description">{post.description}</p>
      </motion.div>

      <motion.div variants={backVariants}>
        <div className="py-6 sm:py-12">
          <h4 className="text-grey-500 text-center text-2xl sm:text-3xl md:text-4xl font-bold sm:tracking-tight">Share this project</h4>
          <div className="mt-6 flex items-center justify-center">
            <a
              href={`https://twitter.com/share?url=${currentUrl}/&text=Check%20out%20${post.name}%20on%20Cosmonauts%20World!`}
              target="blank_"
              rel="noopener noreferrer"
              className="default-transition block mr-4"
            >
              <img
                width={30}
                height={30}
                src="/static/icons/twitter.svg"
                alt="twitter"
              />
            </a>
          </div>
        </div>

        <div className="btn-container">
          <Link href="/" replace>
            <a>
            ← Back to list
            </a>
          </Link>
        </div>
      </motion.div>
    </motion.div>

    <style jsx>
      {`
        .btn-container {
          margin-top: 32px;
          width: 100%;
          justify-content: center;
          display: flex;
        }

        .icons-container {
          display: grid;
          grid-auto-flow: column;
          gap: 3.5rem;
          justify-content: center;
          padding: 40px;
        }

        .icon-item {
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .description {
          max-width: 600px;
          text-align: center;
          margin: 0 auto;
          padding: 20px 0;
        }

        @media screen and (max-width: 500px) {
          .icons-container {
            gap: 1.5rem;
          }
        }
      `}
    </style>
  </div>
);

Post.getInitialProps = ({ query }) => {
  // replace % with -
  const cleanURL = (item) => item.toLowerCase().split(' ').join('-');

  // match param of post name
  const post = mapping.find((item) => cleanURL(item.name) === query.item);

  // get k,v of social links
  const keys = Object.keys(post.links);

  return {
    post,
    keys,
  };
};

export default Post;
