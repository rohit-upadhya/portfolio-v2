import { useState } from 'react'
import { FaGithub, FaLinkedin, FaGlobe, FaCalendar } from 'react-icons/fa';
import { SiHuggingface, SiKaggle  } from 'react-icons/si';
// import './App.css'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
    <Header />

    <main className="flex-grow container mx-auto px-8 py-16 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">ROHIT UPADHYA</h1>
      <p className="text-xl text-gray-600 mb-8">
        Explore my latest blogs, projects, and ongoing research.
      </p>
      <div className="space-x-4">
        <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-150">View Blog</a>
        <a href="#" className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition duration-150">See Research</a>
      </div>
    </main>
    <div className="flex-grow container mx-auto px-8 py-16 flex flex-col items-center justify-center text-center">
    <ResumeSection />
    </div>

    <footer class="bg-white shadow-sm light:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Rohit Upadhya. All Rights Reserved.
        </span>
        <ul class="flex space-x-6 flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="https://github.com/rohit-upadhya" className="text-gray-600 hover:text-gray-800" aria-label="GitHub" target="_blank">
                <FaGithub className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rohit-upadhya/" className="text-gray-600 hover:text-gray-800" aria-label="LinkedIn" target="_blank">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://huggingface.co/datasets/rohit-upadhya" className="text-gray-600 hover:text-gray-800" aria-label="HuggingFace" target="_blank">
                <SiHuggingface className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://www.kaggle.com/rohitupadhya" className="text-gray-600 hover:text-gray-800" aria-label="Kaggle" target="_blank">
                <SiKaggle className="w-6 h-6" />
              </a>
            </li>
        </ul>
      </div>
    </footer>


  </div>
  );
}

function Header(){
  return (
    <header className="shadow-md px-8 py-4 bg-white flex justify-between items-center sticky top-0 z-50">
    <div className="font-semibold text-black">
      <nav className="space-x-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Research</a>
      </nav>
    </div>
    <nav className="space-x-6">
    <ul class="flex space-x-6 flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://github.com/rohit-upadhya" className="text-gray-600 hover:text-gray-800" aria-label="GitHub" target="_blank">
              <FaGithub className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rohit-upadhya/" className="text-gray-600 hover:text-gray-800" aria-label="LinkedIn" target="_blank">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="https://huggingface.co/datasets/rohit-upadhya" className="text-gray-600 hover:text-gray-800" aria-label="HuggingFace" target="_blank">
              <SiHuggingface className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="https://www.kaggle.com/rohitupadhya" className="text-gray-600 hover:text-gray-800" aria-label="Kaggle" target="_blank">
              <SiKaggle className="w-6 h-6" />
            </a>
          </li>
      </ul>
    </nav>
  </header>
  );
}

function Education(){
  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <a href="https://www.tum.de/en" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 light:border-gray-700 light:bg-gray-800 light:hover:bg-gray-700">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="src/assets/csm_TUM_de_8592e062d4.png" alt="" />
      <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white">M.Sc. in Computer Science</h5>
          <h6 class="mb-3 font-normal text-gray-700 light:text-gray-400">Technical University of Munich</h6>
          <p class="mb-3 font-normal text-gray-700 light:text-gray-400">October 2022 – February 2025</p>
      </div>
      </a>

      <a href="https://www.nits.ac.in/" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 light:border-gray-700 light:bg-gray-800 light:hover:bg-gray-700">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="src/assets/1920px-National_Institute_Of_Technology_Silchar_Logo.svg.png" alt="" />
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
      <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
        <img className="object-contain w-full rounded-t-lg h-40 md:w-32 md:h-32 md:rounded-none md:rounded-s-lg" src="src/assets/fast-ai.png" alt="" />
        <div className="flex flex-col p-4 w-full leading-relaxed text-gray-700">
          <h3 className="text-xl font-semibold text-gray-900">NLP Engineer</h3>

          <div className="mb-2 text-sm text-gray-600 italic">
            Fast-AI Movies &middot; <FaCalendar className="inline-block text-gray-500 text-xs" /> October 2023 – January 2025
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
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
        <img className="object-contain w-full rounded-t-lg h-40 md:w-32 md:h-32 md:rounded-none md:rounded-s-lg" src="src/assets/umlaut.png" alt="" />
        <div className="flex flex-col p-4 w-full leading-relaxed text-gray-700">
          <h3 className="text-xl font-semibold text-gray-900">Software Engineer</h3>

          <div className="mb-2 text-sm text-gray-600 italic">
            Umalut Engineering and Consultancy Services &middot; <FaCalendar className="inline-block text-gray-500 text-xs" /> October 2023 – May 2024
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
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
        <img className="object-contain w-full rounded-t-lg h-40 md:w-32 md:h-32 md:rounded-none md:rounded-s-lg" src="src/assets/lowes.png" alt="" />
        <div className="flex flex-col p-4 w-full leading-relaxed text-gray-700">
          <h3 className="text-xl font-semibold text-gray-900">Software Engineer</h3>

          <div className="mb-2 text-sm text-gray-600 italic">
            Lowe's India &middot; <FaCalendar className="inline-block text-gray-500 text-xs" /> July 2019 – July 2022
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
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
        <img className="object-contain w-full rounded-t-lg h-40 md:w-32 md:h-32 md:rounded-none md:rounded-s-lg" src="src/assets/iasc.png" alt="" />
        <div className="flex flex-col p-4 w-full leading-relaxed text-gray-700">
          <h3 className="text-xl font-semibold text-gray-900">Summer Research Fellow</h3>

          <div className="mb-2 text-sm text-gray-600 italic">
          Indian Academy of Sciences  &middot; <FaCalendar className="inline-block text-gray-500 text-xs" /> May 2018 – June 2018
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
      </div>

    </div>
    
    
  )
}

function ResumeSection() {
  return (
    <section className="px-4 py-12 max-w-4xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">My Background</h1>

      {/* Education Section */}
      <h2 className="text-3xl text-gray-900 font-bold mb-6">Education</h2>
      <Education />

      {/* Work Experience Section */}
      <h2 className="text-3xl font-bold my-8 text-gray-900">Work Experience</h2>
      
       <WorkExp />
    </section>
  );
}
