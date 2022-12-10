import Image from 'next/image';
import React from 'react';
import project1Image from '../../public/project-1.png';
import project2Image from '../../public/project-2.png';
import project3Image from '../../public/project-3.png';
import Project from './Project';

const Projects = () => {
  const allProjects = [
    {
      title: 'Joldikino',
      image: project1Image,
      type: 'Used Products Realse',
      description: `There is a dashboard to manage the admin panel and the admin can verify a user,
      delete a user and delete reported products. A seller can a add product, advertise a product or delete a product in the dashboard which is posted by the seller. A buyer can buy products manage orders to cancel or remove orders in the dashboard.`,
      tech: [`React, React Router, Tailwind CSS, React Hot Toast, React Stripe, Axios, React
      Query, React Hook Form, Firebase, Node.js, Express.js and MongoDB.`],
      liveLink: 'https://joldikino-assignment.web.app/'
    },
    {
      title: `Shamu's Kitchen`,
      image: project2Image,
      type:'Cloud Kitchen Website',
      description: `Users can register an account by email password or GitHub to post a review.Users can see their reviews on a card that consists of user image and date and time info. Users see their posted reviews on my reviews page and manage reviews by editing or
      delete.`,
      tech: [`React, React Router, Tailwind CSS, React Hot Toast, React Icons, Firebase, Node.js,
      Express.js and MongoDB.`],
      liveLink: 'https://cloud-kitchen-assignment.web.app/'
    },
    {
      title: `Programming Library`,
      image: project3Image,
      type: 'Course Learning Website',
      description: `A user can register an account with email password or Google login to view courses. Users can see course details by register or login and can download course info in pdf. Users can get premium access to a particular course by paying a certain amount.`,
      tech: [`React, React Router, Tailwind CSS, React Hot Toast, React Icons, React to PDF,
      Firebase, Node.js, and Express.js.`],
      liveLink: 'https://programming-library-assignment.web.app/'
    }
  ];

  return (
    <div>
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