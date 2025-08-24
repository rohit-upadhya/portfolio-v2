import { useState } from 'react'
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
  
    <>
        <IntroSection />
        <ResumeSection />
    </>
    );
  }

function IntroSection() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">ROHIT UPADHYA</h1>
      <p className="text-gray-600 max-w-xl mb-6">
        Hi, I'm Rohit – a computer science graduate passionate about AI, machine learning, NLP, and open-source.
        I enjoy solving real-world problems with code and sharing what I learn.
      </p>

      <img
        src="/portfolio-v2/assets/profile.jpg"
        alt="Profile"
        className="w-50 h-50 rounded-full mb-6 border shadow-md"
      />

      <div className="flex gap-4 mb-8">
        <Link to="/portfolio-v2/blogs">
            <button className="!bg-gray-200 text-gray-800 px-5 py-2.5 rounded-lg hover:bg-gray-300 transition cursor-pointer">
            View Blog
            </button>
        </Link>
        <Link to="/portfolio-v2/research">
            <button className="!bg-gray-800 text-white px-5 py-2.5 rounded-lg hover:bg-gray-700 transition cursor-pointer">
            See Research
            </button>
        </Link>
      </div>

    </div>
  );
}


function ResumeSection() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      {/* <div className="flex-grow container mx-auto px-8 py-13 flex flex-col items-center justify-center text-center"> */}
      <section className="py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">My Background</h1>
      <h2 className="text-3xl text-gray-900 font-bold mb-6">Education</h2>
      <Education />
      <h2 className="text-3xl font-bold my-8 text-gray-900">Work Experience</h2>
       <WorkExp />
    </section>
    {/* </div> */}
    </div>
    
  );
}


function Education(){
  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <a href="https://www.tum.de/en" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 light:border-gray-700 light:bg-gray-800 light:hover:bg-gray-700" target="_blank">
      <img class="object-contain w-full rounded-t-lg h-32 md:w-30 md:h-30 md:rounded-none md:rounded-s-lg pl-1 pt-1" src="/portfolio-v2/assets/tum_logo.png" alt="" />
      <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white">M.Sc. in Computer Science</h5>
          <h6 class="mb-3 font-normal text-gray-700 light:text-gray-400">Technical University of Munich</h6>
          <p class="mb-3 font-normal text-gray-700 light:text-gray-400">October 2022 – February 2025</p>
      </div>
      </a>

      <a href="https://www.nits.ac.in/" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 light:border-gray-700 light:bg-gray-800 light:hover:bg-gray-700" target="_blank">
      <img class="object-contain w-24 md:w-32 rounded-t-lg h-auto md:h-32 pl-1 pt-1" src="/portfolio-v2/assets/1920px-National_Institute_Of_Technology_Silchar_Logo.svg.png" alt="" />
      <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white">B.Tech. in Computer Science and Engineering</h5>
          <h6 class="mb-3 font-normal text-gray-700 light:text-gray-400">National Institute of Technology Silchar</h6>
          <p class="mb-3 font-normal text-gray-700 light:text-gray-400">August 2015 – May 2019</p>
      </div>
      </a>

    </div>
  </div>
  )
}

function WorkExp(){
  return (
    <div className="max-w-5xl mx-auto space-y-4 py-8">
      <a href="https://www.aiviq.com/"  target="_blank" className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
        <img className="object-contain w-full rounded-t-lg h-40 md:w-32 md:h-32 md:rounded-none md:rounded-s-lg" src="/portfolio-v2/assets/aiviq.png" alt="" />
        <div className="flex flex-col p-4 w-full leading-relaxed text-gray-700">
          <h3 className="text-xl font-semibold text-gray-900">Senior AI/ML Engineer</h3>

          <div className="mb-2 text-sm text-gray-600 italic">
            Aiviq &middot; <FaCalendar className="inline-block text-gray-500 text-xs" /> May 2025 – Present &middot; <FaMapMarkerAlt className="inline-block text-gray-500 text-xs" /> Remote
          </div>

          <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-left">
            <li>
              Architected and launched a dynamic Azure RAG chat assistant, using Azure Open-AI models, Cognitive Search, Cosmos DB, that continuously ingests new Confluence pages and, via dynamic routing and caching, serves low-latency, context-aware answers to enterprise users.
            </li>
            <li>
              Designing LangGraph-based autonomous customer-service agents that ingest real-time hedge-fund data feeds, perform statistical QC, and auto-populate filings—removing manual reconciliation steps and accelerating regulatory reporting.
            </li>
          </ul>
        </div>
      </a>

      <a href="https://fast-ai-movies.de/"  target="_blank" className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
        <img className="object-contain w-full rounded-t-lg h-40 md:w-32 md:h-32 md:rounded-none md:rounded-s-lg" src="/portfolio-v2/assets/fast-ai.png" alt="" />
        <div className="flex flex-col p-4 w-full leading-relaxed text-gray-700">
          <h3 className="text-xl font-semibold text-gray-900">NLP Engineer</h3>

          <div className="mb-2 text-sm text-gray-600 italic">
            Fast-AI Movies &middot; <FaCalendar className="inline-block text-gray-500 text-xs" /> October 2023 – January 2025 &middot; <FaMapMarkerAlt className="inline-block text-gray-500 text-xs" /> Munich, Germany
          </div>

          <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-left">
            <li>
              Developed a Streamlit-based quiz generator leveraging PEFT-tuned LLaMA/Mistral models, reducing manual workload by 80%.
            </li>
            <li>
              Designed a relation extraction module using GPT-4 & fine-tuned LLaMA models with a Streamlit UI for testing and demos; structured 12,000+ support interactions to improve response accuracy and speed.
            </li>
            <li>
              Engineered backend infrastructure for an automated tutorial generator using YOLO-based UI detection, Azure TTS/STT, OpenAI APIs — streamlining onboarding and training content creation.
            </li>
            <li>
              Ran Agile sprints and translated technical plans for cross-functional teams, aligning roadmap goals across engineering and non-technical stakeholders.
            </li>
          </ul>
        </div>
      </a>

      <a href="https://newsroom.accenture.com/news/2021/accenture-completes-acquisition-of-umlaut" target="_blank" className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
        <img className="object-contain w-full rounded-t-lg h-40 md:w-32 md:h-32 md:rounded-none md:rounded-s-lg" src="/portfolio-v2/assets/umlaut.png" alt="" />
        <div className="flex flex-col p-4 w-full leading-relaxed text-gray-700">
          <h3 className="text-xl font-semibold text-gray-900">Engineer (Part Time)</h3>

          <div className="mb-2 text-sm text-gray-600 italic">
            Umalut Engineering and Consultancy Services &middot; <FaCalendar className="inline-block text-gray-500 text-xs" /> October 2023 – May 2024 &middot; <FaMapMarkerAlt className="inline-block text-gray-500 text-xs" /> Munich, Germany
          </div>

          <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-left">
            <li>
              Built a defect clustering pipeline for BMW, reducing manual triage workload by 60% and improving turnaround time for engineering teams.
            </li>
            <li>
              Rebuilt a legacy MS Access tool as a scalable Django-based web app for Bosch, enabling multi-user access and reducing maintenance overhead.
            </li>
          </ul>
        </div>
      </a>

      <a href= "https://lowes.co.in/" target="_blank" className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
        <img className="object-contain w-full rounded-t-lg h-40 md:w-32 md:h-32 md:rounded-none md:rounded-s-lg" src="/portfolio-v2/assets/lowes.png" alt="" />
        <div className="flex flex-col p-4 w-full leading-relaxed text-gray-700">
          <h3 className="text-xl font-semibold text-gray-900">Software Engineer</h3>

          <div className="mb-2 text-sm text-gray-600 italic">
            Lowe's India &middot; <FaCalendar className="inline-block text-gray-500 text-xs" /> July 2019 – July 2022 &middot; <FaMapMarkerAlt className="inline-block text-gray-500 text-xs" /> Bangalore, India
          </div>

          <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-left">
            <li>
              Led development of REST APIs to automate CMDB updates and incident workflows, improving operational efficiency across 30+ engineering teams.
            </li>
            <li>
              Built a real-time incident dashboard for Major Incident Managing teams, reducing incident response time and increasing visibility for P1 outages.
            </li>
            <li>
              Served as SME for Clarity PPM across 100+ projects, streamlining governance and ensuring consistent project reporting.
            </li>
            <li>
              Replaced premium analytics tools with ElasticSearch/Kibana, saving $15K+ quarterly and enhancing ticket trend visibility.
            </li>
          </ul>
        </div>
      </a>

      <a href="https://www.ias.ac.in/" target="_blank" className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
        <img className="object-contain w-full rounded-t-lg h-40 md:w-32 md:h-32 md:rounded-none md:rounded-s-lg" src="/portfolio-v2/assets/iasc.png" alt="" />
        <div className="flex flex-col p-4 w-full leading-relaxed text-gray-700">
          <h3 className="text-xl font-semibold text-gray-900">Summer Research Fellow</h3>

          <div className="mb-2 text-sm text-gray-600 italic">
          Indian Academy of Sciences  &middot; <FaCalendar className="inline-block text-gray-500 text-xs" /> May 2018 – June 2018 &middot; <FaMapMarkerAlt className="inline-block text-gray-500 text-xs" /> Bangalore, India
          </div>

          <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-left">
            <li>
            Coded image classification models using CNNs and Open-CV for various imaging datasets.
            </li>
            <li>
            Developed a secure registration portal with role-based access control for an NGO, enabling streamlined user onboarding for community services.
            </li>
          </ul>
        </div>
      </a>

    </div>
    
    
  )
}