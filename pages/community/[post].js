import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import posts from '../../data/posts'

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing
    }
  }
};

const Post = ({ post }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='py-10 p-5 mx-auto'>
      <motion.div variants={textVariants}>
        <p>{post.name}</p>
        <p>{post.description}</p>
      </motion.div>

      <motion.div variants={backVariants}>
        <div className="btn-container">
        <Link href="/">
          <a>Back to list</a>
        </Link>
        </div>
      </motion.div>

      <style jsx>
      {`
        * {
          font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
        }

        .wrapper {
          max-width: 76em;
        }

        .btn-container {
          margin-top: 32px;
          width: 100%;
          -webkit-box-pack: center;
          justify-content: center;
          display: flex;
        }
      `}
      </style>
    </div>
  );
};

Post.getInitialProps = ({ query }) => {
  let post = posts.find(post => post.name == query.post);

  return {
    post
  };
};

export default Post;
