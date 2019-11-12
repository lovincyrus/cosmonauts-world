/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
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

const Post = ({ post }) => (
  <div className="py-40 p-5 mx-auto">
    <motion.div variants={textVariants}>
      <p className="text-5xl font-bold text-gray-800 text-center">
        {post.name}
      </p>
      <div className="icons-container">
        <a href={post.links.proof} className="icon-item">
          <img
            width={35}
            height={35}
            src="/static/icons/file.svg"
            target="blank_"
            rel="noopener noreferrer"
            alt="proof"
          />
        </a>
        <a href={post.links.github} className="icon-item">
          <img
            width={35}
            height={35}
            src="/static/icons/github.svg"
            target="blank_"
            rel="noopener noreferrer"
            alt="github"
          />
        </a>
        <a href={post.links.twitter} className="icon-item">
          <img
            width={35}
            height={35}
            src="/static/icons/twitter.svg"
            target="blank_"
            rel="noopener noreferrer"
            alt="twitter"
          />
        </a>
        <a href={post.links.chat} className="icon-item">
          <img
            width={35}
            height={35}
            src="/static/icons/message-circle.svg"
            target="blank_"
            rel="noopener noreferrer"
            alt="chat"
          />
        </a>
        <a href={post.links.web} className="icon-item">
          <img
            width={35}
            height={35}
            src="/static/icons/external-link.svg"
            target="blank_"
            rel="noopener noreferrer"
            alt="web"
          />
        </a>
      </div>
      <p className="text-center text-gray-800 description">{post.description}</p>
    </motion.div>

    <motion.div variants={backVariants}>
      <div className="btn-container">
        <Link href="/">
          <a>
            ← Back to list
          </a>
        </Link>
      </div>
    </motion.div>

    <style jsx>
      {`
        .wrapper {
          max-width: 76em;
        }

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
  const post = posts.find((post) => post.name == query.post);

  return {
    post,
  };
};

export default Post;
