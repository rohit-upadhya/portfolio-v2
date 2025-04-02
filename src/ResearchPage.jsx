import { FaGithub, FaLinkedin, FaCalendar, FaReact, FaMapMarkerAlt } from 'react-icons/fa';
import { SiHuggingface, SiKaggle, SiTailwindcss, SiVite } from 'react-icons/si';

export default function ResearchPage() {
    return (
      <div className="max-w-5xl mx-auto space-y-4 py-8 text-center" >
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Research & Publications</h1>

        
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:bg-gray-50 text-left w-3/4">
              <h2 className="text-xl font-bold text-gray-900">Cross-Lingual Query based Paragraph Retrieval for European Court of Human Rights Judgements</h2>
              <p className="text-gray-600 text-sm italic mb-2">Master’s Thesis</p>
              <p className="text-gray-700 mb-2">
                We proposed a new Cross-Lingual dataset called <span>LexCLiPR</span> obtained from the articles and judgements of the European Court of Human Rights public database. We then applied this dataset to benchmark various LMs in a zero-shot setting. We finetuned the same models using LexCLiPR, applying two architectures - Simaese and Two-Tower setups. Finally, we proposed a novel Graph-Based approach called LexGraPh whereby we tried to model the paragraphs within each judgement as nodes and the connections between them as edges. This allowed us to capture the relationships between the different paragraphs enabling better retreival. LexCLiPR has been submitted for review at ARR for ACL'25.
              </p>
              <a
                href="/blog/research/lexclipr"
                className="text-blue-600 hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
  
          {/* <div className="flex justify-center">
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:bg-gray-50 text-left w-3/4">
              <h2 className="text-xl font-bold text-gray-900">Cross-Lingual Query based Paragraph Retrieval for European Court of Human Rights Judgements</h2>
              <p className="text-gray-600 text-sm italic mb-2">Master’s Thesis</p>
              <p className="text-gray-700 mb-2">
                We proposed a new Cross-Lingual dataset called <span>LexCLiPR</span> obtained from the articles and judgements of the European Court of Human Rights public database. We then applied this dataset to benchmark various LMs in a zero-shot setting. We finetuned the same models using LexCLiPR, applying two architectures - Simaese and Two-Tower setups. Finally, we proposed a novel Graph-Based approach called LexGraPh whereby we tried to model the paragraphs within each judgement as nodes and the connections between them as edges. This allowed us to capture the relationships between the different paragraphs enabling better retreival. LexCLiPR has been submitted for review at ARR for ACL'25.
              </p>
              <a
                href="/blog/research/lexclipr"
                className="text-blue-600 hover:underline"
              >
                Read More →
              </a>
            </div>
          </div> */}
          
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Paper Reviews</h1>
        <h4 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Coming Soon</h4>
        </div>
    );
  }
  