/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Tooltip from '@material-ui/core/Tooltip';
import DarkModeToggle from '../../components/dark-mode-toggle';

import { mapping } from '../../data/posts-manifest';

import '../../styles/main.css';

const Clipboard = dynamic(() => import('react-clipboard.js'), {
  ssr: false,
});

const cleanUrl = (item) => item.toLowerCase().split(' ').join('-');

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

const Post = ({ post, socialLinks }) => (
  <div className="pt-20 p-5 mx-auto sm:pt-24 md:pt-32">
    <DarkModeToggle />
    <motion.div initial="exit" animate="enter" exit="exit">
      <Head>
        <title>
          {post.name}
          {' '}
          &#183; Cosmonauts World
        </title>
      </Head>

      <motion.div variants={textVariants}>
        <p className="font-bold text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
          {post.name}
        </p>

        {post.verified === 'true' ? (<p className="pt-5 text-center">Verified by cosmonauts! 👩‍🚀</p>) : ('')}

        <div className="icons-container">
          {socialLinks.map((item, index) => (
            <a href={post.links[item]} target="blank_" rel="noopener noreferrer" className="icon-item" key={index}>
              <img
                width={35}
                height={35}
                src={`/static/icons/${item}.svg`}
                alt={item}
                title={item}
                className="icon-color"
              />
            </a>
          ))}
        </div>

        <div className="text-center">
          <span className="category-item">{post.category}</span>
        </div>

        <p className="text-center description">{post.description}</p>
      </motion.div>

      <motion.div variants={textVariants}>
        <div className="py-6 sm:py-12">
          <h4 className="text-gray-500 font-bold text-center text-xl sm:text-2xl md:text-3xl sm:tracking-tight">Share this project</h4>
          <div className="mt-6 flex items-center justify-center">
            <Tooltip title="Share this project! 🎉" aria-label="Share this project! 🎉">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://cosmonauts.world/projects/${cleanUrl(post.name)}`}
                target="blank_"
                rel="noopener noreferrer"
                className="block mr-4"
              >
                <img
                  width={25}
                  height={25}
                  src="/static/icons/facebook.svg"
                  alt="facebook"
                  className="icon-color"
                />
              </a>
            </Tooltip>
            <Tooltip title="Tweet this project! 🎉" aria-label="Tweet this project! 🎉">
            <a
              href={`https://twitter.com/share?url=https://cosmonauts.world/projects/${cleanUrl(post.name)}&text=Check%20out%20${post.name}%20on%20Cosmonauts%20World! 🚀`}
              target="blank_"
              rel="noopener noreferrer"
              className="block mr-4"
            >
              <img
                width={25}
                height={25}
                src="/static/icons/twitter.svg"
                alt="twitter"
                className="icon-color"
              />
            </a>
            </Tooltip>
            <Clipboard
              data-clipboard-text={`https://cosmonauts.world/projects/${cleanUrl(post.name)}`}
              className="block mr-4"
            >
              <Tooltip title="Copy this project's URL! 🎉" aria-label="Copy this project's URL! 🎉">
                <img
                  width={25}
                  height={25}
                  src="/static/icons/clipboard.svg"
                  alt="clipboard"
                  className="icon-color"
                />
              </Tooltip>
            </Clipboard>
          </div>
        </div>
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

        .category-item {
          background-color: #ecdb54;
          color: #000;
          font-size: 11px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 6px 12px 6px 14px;
          border-radius: 6px;
          display: inline-flex;
          margin-top: 5px;
          margin-right: 5px;
        }

        .description {
          max-width: 600px;
          text-align: center;
          margin: 0 auto;
          padding: 20px 0;
        }

        @media screen and (max-width: 480px) {
          .icons-container {
            gap: 1.5rem;
          }
        }
      `}
    </style>
  </div>
);

Post.getInitialProps = async ({ query }) => {
  // match param of post name
  const post = mapping.find((item) => cleanUrl(item.name) === query.item);

  // get k,v of social links
  const socialLinks = Object.keys(post.links);

  return {
    post,
    socialLinks,
  };
};

export default Post;
