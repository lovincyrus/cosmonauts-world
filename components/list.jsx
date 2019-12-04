/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';
import DisplayProjects from './display-projects';

class List extends React.Component {
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
    return <DisplayProjects setCategory={this.setCategory} state={this.state} />;
  }
}

export default List;
