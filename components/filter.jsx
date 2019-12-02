/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { PureComponent } from 'react';
import { categories } from '../data/posts-manifest';

export default class extends PureComponent {
  render() {
    const { onSelect } = this.props;

    return (
      <div className="flex items-center justify-center mt-8">
        {categories.map((category, index) => {
          const id = categories[index];

          return (
            <button
              type="button"
              className="block mr-4"
              onClick={() => onSelect(id)}
              key={id}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
}
