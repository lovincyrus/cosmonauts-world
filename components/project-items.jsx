/* eslint-disable react/prop-types */
import React from 'react';
import ProjectItem from './project-item';

const ProjectItems = ({ state: { projects, displayCategory } }) => (
  <div className="grid">
    {projects
      .filter((item) => item.tags.includes(displayCategory) || displayCategory === 'all')
      .map(({
        name, description, image, network, tags,
      }) => (
        <ProjectItem
          key={name}
          name={name}
          description={description}
          image={image}
          network={network}
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
  </div>
);

export default ProjectItems;
