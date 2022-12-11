import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
      <div aria-label="Article">
        <img
          src={project.image}
          className="object-cover w-full h-64 rounded"
          alt="project"
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
        <div className="flex gap-2 items-center">
          <Link className='border-2 border-cyan-500 px-2 py-1 text-cyan-600 font-medium rounded-sm' href={project.liveLink}>Live Site</Link>
          <Link href={`projects/${project?.id}`} className='border-2 border-cyan-500 px-2 py-1 text-cyan-600 flex-1 text-center font-bold rounded-sm'>Explore Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Project;