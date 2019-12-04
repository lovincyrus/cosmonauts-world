/* eslint-disable react/prop-types */
import React from 'react';
import ProjectItems from './project-items';
import showTags from './show-tags';
import BackToTop from './backtotop';

const DisplayProjects = ({ state, state: { projectCategories, displayCategory }, setCategory }) => (
  <div>
    <div className="sm:inline-block sm:block md:flex items-center justify-center mt-8 pb-8">
      {showTags(projectCategories, setCategory, displayCategory)}
    </div>

    <div>
      <ProjectItems state={state} />
    </div>

    <div className="btn-container">
      <BackToTop />
    </div>

    <style jsx>
      {`
        .btn-container {
          margin-top: 2rem;
          width: 100%;
          -webkit-box-pack: center;
          justify-content: center;
          display: flex;
        }
      `}
    </style>
  </div>
);

export default DisplayProjects;
