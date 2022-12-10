import Image from 'next/image';
import React from 'react';

const Project = ({project}) => {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
      <div aria-label="Article">
        <Image
          src={project.image}
          className="object-cover w-full h-64 rounded"
          alt=""
        />
      </div>
      <div className="py-5">
        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
          {project.type}
        </p>
        <h2
          className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          <p className="text-2xl font-bold leading-5">{project.title}</p>
        </h2>
        <p className="mb-4 text-gray-700">
          {project.description.slice(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default Project;