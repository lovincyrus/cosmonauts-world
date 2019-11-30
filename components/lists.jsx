/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const cleanUrl = (item) => item.split(' ').join('-');

const ProductItem = ({ name }) => (
  <div>{name}</div>
);

const ProductItems = ({ state: { projects, displayCategory } }) => (
  <div>
    {projects
      .filter(
        ({ tags }) => displayCategory.includes(tags) || displayCategory === 'all',
      )
      .map(({ tags, name, description }) => (
        <ProductItem
          key={name}
          tags={tags}
          name={name}
          description={description}
        />
      ))}
  </div>
);

const showCategories = (projectCategories, setCategory) => projectCategories.map((category) => (
  <div className="flex items-center justify-center mt-8">
    <button
      key={category}
      className={`${cleanUrl(category)}`}
      onClick={() => setCategory(category)}
    >
      {category}
    </button>
  </div>
));

const UI = ({ state, state: { projectCategories }, setCategory }) => (
  <div>
    <div>
      {showCategories(projectCategories, setCategory)}
    </div>
    <div>
      <ProductItems state={state} />
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
