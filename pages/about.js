import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div>
      <Head>
        <title>About - noyandey</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="text-center">
          <h2 className="text-4xl font-semibold font-code"><span className="font-bold text-cyan-500">About</span> Me</h2>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 justify-items-center items-center">
          <div>
            <Image src="/noyan-2.png" width={400} height={400}></Image>
          </div>
          <div className="px-4">
            <p className="text-justify text-xl">
              I am <span className="font-bold font-code text-cyan-500">Noyan</span>. Love to write code with a passion. From my childhood, I had a dream to become a web developer. Today that dream has been fulfilled through hard work, dedication, and sacrifice. I am self-motivated and skilled in web technologies. I am an expert in building applications with the JavaScript UI library React, Node.js, Express.js, and CRUD operations with MongoDB Database.I am passionate about programming, especially building web applications. When I write code, motivation comes from within myself, which helps me to complete a task perfectly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;