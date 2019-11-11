import React, { useState } from 'react'
import { motion } from 'framer-motion'
import posts from '../data/posts'

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

export default function Companies() {
  const [truncated] = useState(true)
  const [numToPost] = useState(9)
  const truncatedPosts = truncated ? posts.slice(0, numToPost) : posts

  return (
    <>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
      <div className="wrapper">
        <div className="grid">
          {truncatedPosts.map((item, index) => (
            <motion.div variants={postVariants} key={index}>
              <a href={item.website} target="blank_" rel="noopener noreferrer" title={item.name}>
                <motion.div whileHover="hover" variants={{ hover: { scale: 0.96 } }}>
                  <div className="item">
                    <img src={item.image} alt={item.name} className="logo"/>
                    <h3 className="font-medium py-5">{item.name}</h3>
                    <p>{item.description.substr(0, 500).trim()} ...</p>
                  </div>
                  </motion.div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {truncatedPosts && (
        <div className="btn-container">
          <a onClick={() => console.log(posts)}>
            <button>
              View all {posts.length} posts →
            </button>
          </a>
        </div>
      )}

      <style jsx>
      {`
        .wrapper {
          padding-top: 40px;
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
          padding: 1.5rem;
          border-style: none;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
          background: rgb(255, 255, 255);
          border-radius: 4px;
        }

        .logo {
          width: 72px;
          height: 72px;
        }

        .btn-container {
          margin-top: 32px;
          width: 100%;
          -webkit-box-pack: center;
          justify-content: center;
          display: flex;
        }

        button {
          width: 100%;
          font-weight: 600;
          color: rgb(92, 97, 102);
          background: rgb(236, 237, 238);
          padding: 12px;
          border-radius: 4px;
        }

        @media screen and (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (max-width: 500px) {
          .grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}
      </style>
      </motion.div>
    </>
  )
}