import { FaGithub, FaLinkedin, FaCalendar, FaReact, FaMapMarkerAlt } from 'react-icons/fa';
import { SiHuggingface, SiKaggle, SiTailwindcss, SiVite } from 'react-icons/si';

export default function ResearchPage() {
    return (
      <>
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Research & Publications</h1>
  
        <div className="space-y-6">
          <div className="bg-white border rounded-lg shadow-sm p-6 hover:bg-gray-50 text-left">
            <h2 className="text-xl font-bold text-gray-900">Fine-tuning Large Language Models for Contextual QA</h2>
            <p className="text-gray-600 text-sm italic mb-2">Conference on Computational Linguistics · 2023</p>
            <p className="text-gray-700 mb-2">
              Proposed a PEFT-based fine-tuning technique using LoRA adapters on LLaMA-2 for improving contextual grounding in QA tasks.
            </p>
            <a
              href="https://arxiv.org/abs/xyz"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Read on arXiv →
            </a>
          </div>
  
          <div className="bg-white border rounded-lg shadow-sm p-6 hover:bg-gray-50 text-left">
            <h2 className="text-xl font-bold text-gray-900">Knowledge Graph-enhanced Language Models</h2>
            <p className="text-gray-600 text-sm italic mb-2">Master’s Thesis · TUM · 2024</p>
            <p className="text-gray-700">
              Building methods to augment transformer-based models with dynamic knowledge graph retrieval during inference.
            </p>
          </div>
        </div>
      </>
    );
  }
  