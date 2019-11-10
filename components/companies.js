import React from 'react'
// import Link from 'next/link'
import posts from '../data/posts'
import { motion } from 'framer-motion'

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

const Companies = () => (
  <>
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
    <div className="wrapper">
      <div className="grid">
        {posts.map((item, index) => (
          <motion.div variants={postVariants} key={index}>
            <a href={item.website} target="blank_" rel="noopener noreferrer">
              <motion.div whileHover="hover" variants={{ hover: { scale: 0.96 } }}>
                <div className="item">
                  <img src={item.image} className="logo"/>
                  <h3 className="font-medium py-2">{item.name}</h3>
                </div>
                </motion.div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>

    <style jsx>
    {`
      .wrapper {
        padding-top: 80px;
        margin: 0 auto;
        max-width: 76em;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
      }

      .item {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 32px 14px 20px 32px;
        border-style: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
        background: rgb(255, 255, 255);
        border-radius: 8px;
      }

      .logo {
        width: 72px;
        height: 72px;
      }

      @media screen and (max-width: 900px) {
        .grid {
          grid-template-columns: repeat(2,1fr);
        }
      }

      @media screen and (max-width: 500px) {
        .grid {
          grid-template-columns: repeat(1,1fr);
        }
      }
    `}
    </style>
    </motion.div>
  </>
)

export default Companies