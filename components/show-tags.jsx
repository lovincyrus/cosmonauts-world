/* eslint-disable react/button-has-type */
import React from 'react';

const cleanUrl = (item) => item
  .toLowerCase()
  .split(' ')
  .join('-');

const showTags = (projectCategories, setCategory, { state: { displayCategory } }) => projectCategories.map((category) => (
  <button
    key={category}
    className={`block mr-4 ${cleanUrl(category)} ${displayCategory === category ? 'selected' : ''}`}
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

export default showTags;
