import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="space-y-6">
        <div className='text-center md:text-left'>
          <h2 className="text-xl font-code font-medium tracking-widest">This Is Noyan Dey</h2>
          <h2 className="text-2xl block md:hidden font-bold">I'm a Developer</h2>
        </div>
        {/* animated text */}
        <div className='hidden md:block'>
          <TypeAnimation className='text-6xl font-code font-bold'
            // Same String at the start will only be typed once, initially
            sequence={[
              "I'm a Developer",
              1000,
              "I,m a Programmer",
              1000,
            ]}
            speed={30} // Custom Speed from 1-99 - Default Speed: 40
            wrapper="h2" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </div>
        {/* download button */}
        <div className="hidden md:block">
          <a href="/Noyan_Dey.pdf" download="Resume.pdf" className="bg-cyan-500 px-4 py-2 text-white font-code font-semibold">Download Resume</a>
        </div>
      </div>
      <div>
        <div className='bg-gradient-to-b from-cyan-500 rounded-tl-full'>
          <Image src="/developer.png" width={400} height={400} alt="developer"></Image>
        </div>
      </div>
      <div className="block md:hidden -mt-4">
        <a href="/Noyan_Dey.pdf" download="Resume.pdf" className="bg-cyan-500 px-4 py-2 text-white font-code font-semibold">Download Resume</a>
      </div>
    </div>
  );
};

export default Banner;