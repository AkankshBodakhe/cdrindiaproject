import React from 'react';
import child from '../assets/whoWeArepic/child.jpg';

const WhoWeAre = () => (
  <div className="py-12 bg-white">
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-start gap-8">
        
        {/* Text Column */}
        <div className="w-full lg:w-[570px]">
          <h2 className="text-[36px] font-semibold text-gray-700 mb-4">About Us</h2>
          <p className="text-[18px] text-gray-700 leading-relaxed mb-4 text-justify">
            These days development has become a buzzword and we often see it being used very loosely.
          </p>
          <p className="text-gray-700 text-[18px] leading-relaxed mb-4 text-justify">
            As a small beginning in welfare of the people and Human Development regard, we at Centre for Development Research (CDR),
            have taken a small step to first study, understand and then present the real facts to the society. CDR would be a research
            institution which would be taking up various research projects from Government and Non‑Government agencies and publish the results
            for improving the public understanding.
          </p>
          <p className="text-gray-700 text-[18px] leading-relaxed text-justify">
            Similarly it also strives to create a culture of research and academic amongst the young minds of India. Also we would be
            organizing public lectures every quarter on issues of public and national importance. Eminent personalities and scholars from
            various areas of knowledge would be invited to deliver the lecture followed by interactive session with the audience. The outcome
            of these lectures and interactions will be published. It is a “Not for profit” endeavor started by voluntary efforts of few young
            minds coming from diverse fields of knowledge and experience.
          </p>
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-[570px] flex justify-center">
          <img
            src={child}
            alt="Children in circular group view"
            className="rounded-lg object-cover"
            style={{ width: '570px', height: '380px', marginTop: '80px' }}
          />
        </div>
      </div>
    </div>
    {/* Centered TEAM CDR Heading */}
    <div className="text-center mt-16">
      <h1 className="text-[36px] font-Dm sans font-bold text-gray-700">Team CDR</h1>
    </div>
  </div>
);

export default WhoWeAre;
