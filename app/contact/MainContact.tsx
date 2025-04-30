import React from 'react';
import Button from '../components/Button'; // Added import

const MainContact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column: Form */}
        <div className="space-y-6">
          <h2 className="text-4xl font-light text-gray-900">Have a question?</h2>
          <p className="text-stone-500 text-sm lg:text-md font-light">
            Get your personalized estimate in just a few clicks — it&apos;s fast, easy, and completely free
          </p>
          <form action="#" method="POST" className="flex flex-col gap-2 lg:gap-4">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              placeholder="First name"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
            />
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              placeholder="Last name"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
            />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
            />
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Message"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
              defaultValue={''}
            />
            <Button route="#" variant="black" text="Submit" icon />
          </form>
        </div>

        {/* Right Column: Contact Info */}
        <div className="bg-white p-8 rounded-lg space-y-6 h-fit">
          <h3 className="text-4xl font-light text-gray-900">Get in touch</h3>
          <p className="text-gray-700">We love to hear from you. Our friendly team is always here to chat.</p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-stone-200 rounded-full">
                {/* Placeholder for Address Icon */}
                <svg className="h-6 w-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-lg font-light text-gray-900">Address</p>
                <p className="text-gray-700">7901 4th Street North STE 300,
St. Petersburg, FL 33702,
United States</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-stone-200 rounded-full">
                {/* Placeholder for Phone Icon */}
                <svg className="h-6 w-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <p className="text-lg font-light text-gray-900">Phone</p>
                <p className="text-gray-700">+1 (469) 555-4099</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-stone-200 rounded-full">
                {/* Placeholder for Email Icon */}
                <svg className="h-6 w-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-lg font-light text-gray-900">Email</p>
                <p className="text-gray-700">support@appliedmind.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContact;