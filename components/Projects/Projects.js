import Image from 'next/image';
import React from 'react';
import project1Image from '../../public/project-1.png';
import project2Image from '../../public/project-2.png';
import project3Image from '../../public/project-3.png';
import Project from './Project';

const Projects = ({allProjects}) => {
  return (
    <div id="projects">
      <div className='text-center mt-12'>
        <h1 className='text-4xl font-code font-bold'>Projects</h1>
      </div>
      <div>
        {/* proejcts cards */}
        <div className="px-4 py-8 mx-auto lg:px-0 lg:py-8">
          <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {
              allProjects.map((project, i) => <Project
                key={i}
                project={project}
              ></Project>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;