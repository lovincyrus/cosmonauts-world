/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ProjectItems from './project-items';
// import showTags from './show-tags';

import BackToTop from './backtotop';

const cleanUrl = (item) => item
  .toLowerCase()
  .split(' ')
  .join('-');


// ${displayCategory === category ? 'selected' : ''}
// pass displayCateogry to showTags
const showTags = (projectCategories, setCategory, displayCategory) => projectCategories.map((category) => (
  <button
    key={category}
    className={`block mr-4 ${cleanUrl(category)} ${projectCategories.includes(category) ? 'selected' : ''}`}
    onClick={() => setCategory(category)}
  >
    {category}

    <style jsx>
      {`
        .selected {
          color: #0070f3;
        }
      `}
    </style>
  </button>
));

const UI = ({ state, state: { projectCategories }, setCategory }) => (
  <div>
    <div className="flex items-center justify-center mt-8 pb-8">
      {showTags(projectCategories, setCategory)}
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
