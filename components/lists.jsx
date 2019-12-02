/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


const cleanUrl = (item) => item.toLowerCase().split(' ').join('-');

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

const ProjectItem = ({
  name, image, tags, verified, network,
}) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
  >
    <div className="max-w-6xl">
      <motion.div variants={postVariants}>
        <Link
          scroll={false}
          href="/projects/[item]"
          as={`/projects/${cleanUrl(name)}`}
        >
          <a>
            <motion.div
              whileHover="hover"
              variants={{ hover: { scale: 0.96 } }}
            >
              <div className="item">
                {network.includes('mainnet') ? (
                  <p className="network-status text-base">
                    {network}
                    {' '}
🚀
                  </p>
                ) : (
                  <p className="network-status text-base">
                    {network}
                    {' '}
🏗
                  </p>
                )}
                <img
                  src={image}
                  alt={name}
                  className="w-16 h-16"
                />
                {verified === 'true' ? (
                  <h3 className="font-medium py-3 title">
                    {name}
                    {' '}
                    <img
                      width={15}
                      height={15}
                      src="/static/icons/check-circle.svg"
                      alt="Verified by cosmonauts! 👩‍🚀"
                      title="Verified by cosmonauts! 👩‍🚀"
                      className="is-verified"
                    />
                  </h3>
                ) : (
                  <h3 className="font-medium py-3">
                    {name}
                    {' '}
                  </h3>
                )}
                {tags.map((tag, index) => (
                  <p className="tags" key={index}>
                    {tag}
                  </p>
                ))}
              </div>
            </motion.div>
          </a>
        </Link>
      </motion.div>
    </div>
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

        .is-verified {
          margin-left: 5px;
          cursor: help;
        }

        .tags {
          background: rgb(13, 22, 35, 0.70);
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
        `}
    </style>
  </motion.div>
);

const ProjectItems = ({ state: { projects, displayCategory } }) => (
  <div className="grid">
    {projects
      .filter((item) => item.tags.includes(displayCategory) || displayCategory === 'all')
      .map(({
        name, description, image, network, verified, tags,
      }) => (
        <ProjectItem
          key={name}
          name={name}
          description={description}
          image={image}
          network={network}
          verified={verified}
          tags={tags}
        />
      ))}
    <style jsx>
      {`
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media screen and (max-width: 960px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (max-width: 480px) {
          .grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}
    </style>
  </div>
);

const showCategories = (projectCategories, setCategory) => projectCategories.map((category) => (
  <button
    key={category}
    className={`block mr-4 ${cleanUrl(category)}`}
    onClick={() => setCategory(category)}
  >
    {category}
  </button>
));

const UI = ({ state, state: { projectCategories }, setCategory }) => (
  <div>
    <div className="flex items-center justify-center mt-8 pb-8">
      {showCategories(projectCategories, setCategory)}
    </div>
    <div>
      <ProjectItems state={state} />
    </div>
  </div>
);

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategory: 'all',
      projects: props.projects,
      projectCategories: props.projectCategories,
    };
    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({
      displayCategory: category,
    });
  }

  render() {
    return <UI setCategory={this.setCategory} state={this.state} />;
  }
}

export default Lists;
