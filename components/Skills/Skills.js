import React from 'react';

const Skills = () => {
  return (
    <>
      <div className='text-center my-12'>
        <h1 className='text-4xl font-code font-bold'>Skills</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center font-code">
        <div className="shadow-md h-40 flex justify-center items-center">
          <h2 className="text-2xl font-bold hover:text-sky-500">HTML5</h2>
        </div>
        <div className="shadow-md h-40 flex justify-center items-center">
          <h2 className="text-2xl font-bold hover:text-sky-500">CSS3</h2>
        </div>
        <div className="shadow-md h-40 flex justify-center items-center">
          <h2 className="text-2xl font-bold hover:text-sky-500">JavaScript</h2>
        </div>
        <div className="shadow-md h-40 flex justify-center items-center">
          <h2 className="text-2xl font-bold hover:text-sky-500">React</h2>
        </div>
        <div className="shadow-md h-40 flex justify-center items-center">
          <h2 className="text-2xl font-bold hover:text-sky-500">Firebase</h2>
        </div>
        <div className="shadow-md h-40 flex justify-center items-center">
          <h2 className="text-2xl font-bold hover:text-sky-500">Node.js</h2>
        </div>
        <div className="shadow-md h-40 flex justify-center items-center">
          <h2 className="text-2xl font-bold hover:text-sky-500">Express.js</h2>
        </div>
        <div className="shadow-md h-40 flex justify-center items-center">
          <h2 className="text-2xl font-bold hover:text-sky-500">MongoDB</h2>
        </div>
      </div>
    </>
  );
};

export default Skills;