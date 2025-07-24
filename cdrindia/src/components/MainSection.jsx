import { FaHandHoldingUsd, FaHandsHelping } from "react-icons/fa";
import donateIcon from "../assets/donate.png";
import volunteerIcon from "../assets/Volunteer.png";
import partnerIcon from "../assets/Partner.png";
import heroBg from "../assets/hero-BG.jpg";


const MainSection = () => {
  return (
    <div className="w-full bg-white font-sans text-[#1c1c1c]">
      {/* President’s Message Section */}
      <div className="px-4 md:px-20 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2b2b5f] mb-6">
          President’s Message
        </h1>
        <div className="text-justify text-[16px] md:text-[17px] leading-7 max-w-5xl mx-auto">
          <p className="mb-4">Dear Friends,</p>
          <p className="mb-4">
            In today’s ultra competitive world, flooded with information
            asymmetry, framing a neutral opinion about any phenomenon or event
            is very difficult. Reaching the truth and then working on it with a
            yardstick of social and national welfare becomes challenging due to
            the various influencing factors like media, social media, etc.
            Hence it is required to work in the direction of providing the
            truth behind the phenomenon, especially in the research and
            Development arena.
          </p>
          <p className="mb-4">
            As a small beginning in this regard, we at Centre for Development
            Research (CDR), have taken a small step to first study, understand
            and then present the real facts to the society. CDR would be a
            research institution which would be taking up various research
            projects from Government and Non Government agencies and would
            publish the results for improving the public understanding. Also we
            would be organizing public lectures every quarter on issues of
            public and national importance. Eminent personalities and scholars
            from various areas of knowledge would be invited to deliver the
            lecture followed by interactive session with the audience. The
            outcome of these lectures and interactions will be published.
            Similarly to create a culture of research and academic
            understanding a research paper presentation competition will be
            organized every year where young students from various sections of
            education will participate.
          </p>
          <p className="mb-4">
            The basic idea is to provide a platform for apolitical, development
            oriented and research based interaction of various thinkers,
            scholars and workers to improve public understanding of issues and
            to encourage active participation in the process of
            nation-building. I take this opportunity to appeal to the readers
            to wholeheartedly participate in this endeavour.
          </p>
          <p className="mt-8 font-semibold">
            Dr. Kapil D. Chandrayan <br />
            <span className="font-normal">Founder President</span>
          </p>
        </div>
      </div>

      {/* Donate - Volunteer - Partner Section */}
      <div className="bg-[#fafafa] py-14 px-4 md:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Donate */}
          <div className="bg-white rounded-lg shadow-md p-5 text-left">
            <div className=" items-center mb-3">
              <img src={donateIcon} alt="Donate" className="w-8 h-8 mr-2 mb-3" />
              <h3 className="text-lg font-semibold text-[#2b2b5f]">Donate</h3>
            </div>
            <p className="text-[15px] leading-6 text-justify">
              A donation is a mere charity, humanitarian aid, or to benefit a cause, it is an investment we make in the social sector. This donation has a multiplier effect in bringing about the welfare of the beneficiaries. Your Donations to CDR will go a long way in helping people understand the truth and also in creating an environment of research oriented development.
            </p>
          </div>

          {/* Volunteer */}
          <div className="bg-white rounded-lg shadow-md p-5 text-left">
            <div className=" items-center mb-3">
              <img src={volunteerIcon} alt="Volunteer" className="w-8 h-8 mr-2 mb-3" />
              <h3
                className="text-lg font-semibold text-[#2b2b5f]"
                style={{ fontFamily: "Segoe UI", fontWeight: 600 }}
              >
                Volunteer
              </h3>
            </div>
            <p className="text-[15px] leading-6 text-justify">
              People choose to volunteer for a variety of reasons. For some it offers the chance to give something back to the community or make a difference to the people around them. For others it provides an opportunity to develop new skills or build on existing experience and knowledge. You Volunteering at CDR would create a win – win situation for You, CDR and the beneficiaries.
            </p>
          </div>

          {/* Partner */}
          <div className="bg-white rounded-lg shadow-md p-5 text-left">
            <div className=" items-center mb-3">
              <img src={partnerIcon} alt="Partner" className="w-8 h-8 mr-2 mb-3" />
              <h3 className="text-lg font-semibold text-[#2b2b5f]">Partner</h3>
            </div>
            <p className="text-[15px] leading-6 text-justify">
              The CDR Partner Network is built on a simple premise: together, we can accomplish more. When you join the network, you become part of a community with a shared goal to do more for our people and nation. Your partnering with CDR would result in convergence of ideas, resources & knowledge all translating into concrete action on ground.
            </p>
          </div>
        </div>
      </div>


      {/* Hero Section */}
      <div
        className="w-full h-[350px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          Research For Development, Leading To A Brighter Future
        </h1>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded shadow-md transition duration-300">
          Donate Now
        </button>
      </div>


      {/* Major Areas of Work Section */}
      <div className="py-12 px-4 md:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2b2b5f] mb-8">
          Major Areas Of Work
        </h2>
        <div className="max-w-6xl mx-auto bg-[#EBEDED] p-6 md:p-10 rounded-md shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 text-[15.5px] leading-7">
          <div>
            <p>
              <span className="font-bold text-orange-600">Strategic Communication : </span>
              Strategic Communication plays a critical success factor in successful implementation of any project. CDR specializes in such Strategic communication initiatives. Developing customized communications for various situations and organizations is the forte of CDR.
            </p>
            <br />
            <p>
              <span className="font-bold text-orange-600">Stakeholder Engagement : </span>
              Most of the large scale projects require an enabling environment for seamless execution. In order to create such an enabling environment, it is necessary to meaningfully engage the stakeholders and align them with the project objectives. CDR engages itself in such stakeholder engagement programs for various welfare projects.
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold text-orange-600">Policy Research : </span>
              CDR has been deeply involved in multiple policy research projects. Empirical studies of various sectors have helped CDR in contributing fruitfully to the policy issues. The focus areas for CDR are Regional Economic Development, Urban Water & Wastewater Management, Rural Water Supply Quality Management, Employment and Livelihood, etc.
            </p>
            <br />
            <p>
              <span className="font-bold text-orange-600">Advocacy : </span>
              It is imperative for any organization to take the decisions and policies to the end user / beneficiaries. CDR tries to play the role in case of government to beneficiary models.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MainSection;
