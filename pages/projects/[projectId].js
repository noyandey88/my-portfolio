import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const ProjectDetails = ({ project }) => {
  const { projectTitle, projectImages, liveLink, features, clientCode, serverCode, techs } = project;
  return (
    <div>
      <Head>
        <title>Project - {projectTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* contents */}
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-code text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span>{projectTitle}</span>
          </h2>
          <div className="text-base text-gray-700 md:text-lg flex gap-2 flex-wrap md:justify-center">
            {
              techs.map((tech, i) => <span className="text-xs border-2 px-2 py-1 border-cyan-100 text-cyan-600 rounded-sm font-code" key={i}>{tech}</span>)
            }
          </div>
        <div className='flex gap-4 mt-4 md:justify-center'>
            <Link className="px-2 py-1 text-xs md:text-base bg-cyan-500 text-white font-code font-medium" href={clientCode}>Client Code</Link>
            <Link className="px-2 py-1 text-xs md:text-base bg-cyan-500 text-white font-code font-medium" href={serverCode}>Server Code</Link>
            <Link className="px-2 py-1 text-xs md:text-base bg-cyan-500 text-white font-code font-medium" href={liveLink}>Live Preview</Link>
          </div>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="flex flex-col justify-center">
            {
              features.map((feature, i) => <div key={i} className="flex font-code text-sm">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-900">
                    {feature}
                  </p>
                  <hr className="w-full my-6 border-gray-300" />
                </div>
              </div>)
            }
          </div>
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src={projectImages[0]}
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src={projectImages[1]}
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src={projectImages[2]}
              alt=""
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const res = await fetch(`https://noyan-portfolio-server.vercel.app/projects/${params?.projectId}`);
  const data = await res.json();

  return {
    props: {
      project: data
    }
  }
}

export const getServerSidePaths = async () => {
  const res = await fetch("https://noyan-portfolio-server.vercel.app/projects");
  const projects = await res.json();

  const paths = projects.map(project => {
    return {
      params: {
        projectId: `${project.id}`
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export default ProjectDetails;