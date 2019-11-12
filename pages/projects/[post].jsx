import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import posts from '../../data/posts';

import '../../styles/main.css';

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
        <title>{post.name}</title>
      </Head>

      <motion.div variants={textVariants}>
        <p className="text-5xl font-bold text-gray-800 text-center">
          {post.name}
        </p>

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
          display: flex;
          -ms-flex-pack: center;
          justify-content: center;
          padding: 40px;
        }

        .icon-item {
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 1rem;
        }

        .description {
          max-width: 600px;
          text-align: center;
          margin: 0 auto;
          padding: 20px 0;
        }
      `}
    </style>
  </div>
);

Post.getInitialProps = ({ query }) => {
  // replace % with -
  const cleanURL = (item) => item.toLowerCase().split(' ').join('-');

  // match param of post name
  const post = posts.find((post) => cleanURL(post.name) === query.post);

  // get k,v of social links
  const keys = Object.keys(post.links);

  return {
    post,
    keys,
  };
};

export default Post;
