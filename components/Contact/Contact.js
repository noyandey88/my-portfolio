import Image from 'next/image';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [state, handleSubmit] = useForm("xjvznjog");

  if (state.succeeded) {
    toast.success('message sent successfully');
  };
  

  return (
    <div id='contact-me'>
      {/* <div className='text-center mt-12 mb-4'>
        <h1 className='text-4xl font-code font-bold'>Contact Me</h1>
      </div> */}
      <div className="grid grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-8 border-2">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <div className="grid grid-cols-1 justify-items-center items-center">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Contact Me</h2>
              <Image src="/mail.gif" width={400} height={400}></Image>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div>
            <label htmlFor="name" className="text-sm">Full name</label>
            <input id="name" type="text" placeholder="" className="w-full p-3 rounded border-2" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <input id="email" type="email" name="email" className="w-full p-3 rounded border-2" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea id="message" name="message" rows="3" className="w-full p-3 rounded border-2" ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-cyan-500 text-white" disabled={state.submitting}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;