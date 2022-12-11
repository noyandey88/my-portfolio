import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='text-center py-8 font-code'>
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
        <h2>Copyright &copy; 2023 <span className="font-bold text-cyan-600">noyandey</span>. All rights reserved</h2>
        <div className="flex gap-4 text-cyan-600 font-semibold">
          <Link href="https://www.linkedin.com/in/noyandey88">LinkedIn</Link>
          <Link href="https://github.com/codernoyan">GitHub</Link>
          <Link href="https://web.facebook.com/noyon.dey.1998">Facebook</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;