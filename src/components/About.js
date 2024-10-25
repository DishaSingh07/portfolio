import React from 'react';
import aboutPic from '../assets/laptop with icons.jpeg'; // Adjust the path as necessary
import experienceIcon from '../assets/experience.png'; // Adjust the path as necessary
import educationIcon from '../assets/education.png'; // Adjust the path as necessary

export default function About() {
  return (
    <section id="about" className="py-12 px-4 md:px-16 lg:px-32 bg-white">
      <p className="text-lg font-semibold text-center text-blue-600">Get To Know More</p>
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Me</h1>
      
      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img 
            src={aboutPic} 
            alt="About" 
            className="w-80 h-80 md:w-96 md:h-96 rounded-lg shadow-xl object-cover" 
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 space-y-6">
          
          {/* Experience and Education Boxes */}
          <div className="flex flex-col md:flex-row md:space-x-8 w-full">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 mb-6 md:mb-0">
              <img 
                src={experienceIcon} 
                alt="Experience Icon" 
                className="w-12 h-12 mb-4" 
              />
              <h3 className="text-xl font-bold text-gray-700 mb-2">Experience</h3>
              <p className="text-gray-600">
                Intern at Aeron Digital Solutions <br /> Full Stack Development
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
              <img 
                src={educationIcon} 
                alt="Education Icon" 
                className="w-12 h-12 mb-4" 
              />
              <h3 className="text-xl font-bold text-gray-700 mb-2">Education</h3>
              <p className="text-gray-600">
                Pursuing B.Tech, Information Technology <br /> Harcourt Butler Technical University
              </p>
            </div>
          </div>

          {/* Introductory Text */}
          <div className="text-gray-700 mt-6">
            <p className="text-lg leading-relaxed">
              I'm a dedicated and passionate developer with a keen interest in both frontend and backend development. I thrive on challenges, always looking for opportunities to learn and grow. My academic journey in Information Technology has equipped me with strong technical skills, while my internship experiences have given me hands-on exposure to real-world projects. As I continue to evolve as a developer, I am excited to bring innovative ideas to life and make meaningful contributions in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
