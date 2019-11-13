import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BackToTop from './backtotop';

import posts from '../data/posts';

import '../styles/main.css';

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

function Companies() {
  const [truncated, setTrunc] = useState(true);
  const [numToPost] = useState(9);
  const truncatedPosts = posts.slice(0, numToPost);

  const cleanURL = (item) => item.toLowerCase().split(' ').join('-');

  return (
    <>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        {truncated ? (
          <div className="py-10 max-w-6xl">
            <div className="grid">
              {truncatedPosts.map((item, index) => (
                <motion.div variants={postVariants} key={index}>
                  <Link
                    scroll={false}
                    href="/projects/[post]"
                    as={`/projects/${cleanURL(item.name)}`}
                  >
                    <a>
                      <motion.div
                        whileHover="hover"
                        variants={{ hover: { scale: 0.96 } }}
                      >
                        <div className="item">
                          {item.network.includes('mainnet') ? (
                            <p className="network-status text-base">
                              {item.network}
                              {' '}
                              🚀
                            </p>
                          ) : (
                            <p className="network-status text-base">
                              {item.network}
                              {' '}
                              🏗
                            </p>
                          )}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16"
                          />
                          {item.verified === 'true' ? (
                            <h3 className="font-medium py-3 title">
                              {item.name}
                              {' '}
                              <img
                                width={15}
                                height={15}
                                src="/static/icons/check-circle.svg"
                                alt="Verified!"
                                title="Verified!"
                                className="ml-1"
                              />
                            </h3>
                          ) : (
                            <h3 className="font-medium py-3">
                              {item.name}
                              {' '}
                            </h3>
                          )}
                          {item.tags.map((tag, index) => (
                            <p className="tags" key={index}>
                              {tag}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="btn-container">
              <button onClick={() => setTrunc(false)}>
                View all
                {' '}
                {posts.length}
                {' '}
                projects →
              </button>
            </div>
          </div>
        ) : (
          <div className="py-10 max-w-6xl">
            <div className="grid">
              {posts.map((item, index) => (
                <motion.div variants={postVariants} key={index}>
                  <Link
                    scroll={false}
                    href="/projects/[post]"
                    as={`/projects/${cleanURL(item.name)}`}
                  >
                    <a>
                      <motion.div
                        whileHover="hover"
                        variants={{ hover: { scale: 0.96 } }}
                      >
                        <div className="item">
                          {item.network.includes('mainnet') ? (
                            <p className="network-status text-base">
                              {item.network}
                              {' '}
                              🚀
                            </p>
                          ) : (
                            <p className="network-status text-base">
                              {item.network}
                              {' '}
                              🏗
                            </p>
                          )}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16"
                          />
                          <h3 className="font-medium py-3">{item.name}</h3>
                          {item.tags.map((tag, index) => (
                            <p className="tags" key={index}>
                              {tag}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="btn-container">
              <BackToTop />
            </div>
          </div>
        )}

        <style jsx>
          {`
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
              position: relative;
            }

            .network-status {
              position: absolute;
              right: 10px;
              top: 10px;
              opacity: 0.85;
            }

            .title {
              display: flex;
              width: fit-content;
            }

            .tags {
              background: rgba(0, 0, 0, 0.2);
              color: white;
              font-size: 11px;
              font-weight: bold;
              text-transform: uppercase;
              letter-spacing: 1px;
              padding: 6px 12px 6px 14px;
              border-radius: 100px;
              display: inline-block;
              margin-right: 5px;
              overflow: auto;
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
  );
}

export default Companies;
