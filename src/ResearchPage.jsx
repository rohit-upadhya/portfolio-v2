import { FaGithub, FaLinkedin, FaCalendar, FaReact, FaMapMarkerAlt } from 'react-icons/fa';
import { SiHuggingface, SiKaggle, SiTailwindcss, SiVite } from 'react-icons/si';

export default function ResearchPage({ onSwitch }) {
    return (
      <div className="max-w-5xl mx-auto space-y-4 py-8 text-center" >
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Research, Reports & Publications</h1>

        
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:bg-gray-50 text-left w-3/4">
              <h2 className="text-xl font-bold text-gray-900">Cross-Lingual Query based Paragraph Retrieval for European Court of Human Rights Judgements</h2>
              <p className="text-gray-600 text-sm italic mb-2">Master’s Thesis</p>
              <p className="text-gray-700 mb-2">
                We proposed a new Cross-Lingual dataset called <span>LexCLiPR</span> obtained from the articles and judgements of the European Court of Human Rights public database. We then applied this dataset to benchmark various LMs in a zero-shot setting. We finetuned the same models using LexCLiPR, applying two architectures - Simaese and Two-Tower setups. Finally, we proposed a novel Graph-Based approach called LexGraPh whereby we tried to model the paragraphs within each judgement as nodes and the connections between them as edges. This allowed us to capture the relationships between the different paragraphs enabling better retreival. LexCLiPR has been submitted for review at ARR for ACL'25.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSwitch(); // now defined properly
                }}
                className="text-blue-600 hover:underline"
              >
                Read More →
              </a>

            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:bg-gray-50 text-left w-3/4">
              <h2 className="text-xl font-bold text-gray-900">LegalTech: Applications of Information Retrieval, Summarization and Simplification</h2>
              {/* <p className="text-gray-600 text-sm italic mb-2">Bachelor’s Thesis</p> */}
              <p className="text-gray-700 mb-2">
              In this seminar paper, I explore the growing role of LegalTech in addressing the longstanding inefficiencies and complexities of the legal domain, particularly focusing on NLP applications like information retrieval, summarization, and simplification. The backlog of legal cases and the opaque nature of legal language present significant barriers to justice, and I argue that technology, especially NLP, offers meaningful solutions. I examine two major methodological approaches: symbol-based methods, which emphasize interpretability using legal-specific entities and events, and embedding-based methods, which utilize dense representations to model latent legal features. I also discuss Legal-BERT, a domain-adapted version of BERT that integrates legal corpora to improve performance on legal tasks.
              The paper delves into specific LegalTech applications, such as legal information retrieval systems designed to link case scenarios with relevant statutes, legal text summarization to produce various levels of case summaries using models like BART, and simplification techniques that replace complex legal terminology with more accessible alternatives. I also cover advanced tasks like legal judgment prediction and similar case matching, emphasizing the importance of interpretability and domain-specific reasoning. As a demonstration, I implemented a binary classification system using rulings from the European Court of Human Rights, employing a hierarchical BERT model to overcome the token limit challenge. While the model showed good precision, recall was limited, likely due to dataset size and lack of domain-specific pretraining. Overall, this work highlights the promise and challenges of applying NLP to the legal domain and sets the stage for future research into making legal systems more efficient and accessible.
              </p>
              <a
                href="https://drive.google.com/file/d/1-hbcaBXlP78rq4g_HGbEzOo0uItHz_KY/view?usp=sharing"
                className="text-blue-600 hover:underline"
                target='_blank'
              >
                Link to report →
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:bg-gray-50 text-left w-3/4">
              <h2 className="text-xl font-bold text-gray-900">Text Classification for Legal Benchmarks</h2>
              {/* <p className="text-gray-600 text-sm italic mb-2">Bachelor’s Thesis</p> */}
              <p className="text-gray-700 mb-2">
              In this practicum project, we worked on hierarchical multilabel text classification (HMTC) with a focus on legal data, specifically using the Reuters RCV1 dataset. Our goal was to enhance classification by leveraging the inherent label hierarchy instead of treating it as a flat problem. We built upon the HiAGM (Hierarchy-aware Global Model) baseline, replacing its GloVe embeddings with BERT, and upgrading its structural encoder from GCN to Graphormer for better hierarchical representation.
              To push the model further, we explored two advanced strategies: contrastive learning and prototype learning. For contrastive learning, we adapted supervised contrastive loss to a multi-label, hierarchical setting and used label-aware embeddings. We also integrated a distance matrix to encode hierarchical relationships and introduced a memory bank to handle label imbalance by storing positive samples across batches. This significantly improved performance, especially for infrequent labels.
              For prototype learning, we introduced class prototypes and trained the model to bring embeddings closer to the correct prototypes and away from incorrect ones, incorporating anti-prototypes for negative sampling. To reflect label relationships, we used an adjacency cost matrix to scale the loss based on the distance between labels in the hierarchy. This approach showed improvements in certain label categories, although overall gains were modest, partly due to limited training epochs and imbalanced label distribution.
              Our results show that incorporating hierarchical structure via contrastive and prototype-based losses improves HMTC performance, particularly when enhanced with memory and distance-based regularization. We also identified several paths for further improvements, including better initialization of prototypes and more sophisticated use of hierarchy-aware distances.
              </p>
              <a
                href="https://drive.google.com/file/d/16KJ5l0T-ppx1vVpAQBvf27UIIUaUNELE/view?usp=sharing"
                className="text-blue-600 hover:underline"
                target='_blank'
              >
                Link to report →
              </a>
            </div>
          </div>
  
          <div className="flex justify-center">
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:bg-gray-50 text-left w-3/4">
              <h2 className="text-xl font-bold text-gray-900">An Intelligent System for Diagnosis of Diabetic Retinopathy</h2>
              <p className="text-gray-600 text-sm italic mb-2">Bachelor’s Thesis</p>
              <p className="text-gray-700 mb-2">
              We proposed an Intelligent System for Diabetic Retinopathy (ISDR) that automates early detection of diabetic retinopathy (DR), a diabetes-related eye disease that can lead to blindness. Using retinal fundus images from a digital fundus camera, the system enhances image quality through contrast-limited adaptive histogram equalization (CLAHE) and then segments key features like the foveal avascular zone (FAZ) and microaneurysms (MA), which are early indicators of DR. These features are classified using support vector machine (SVM), k-nearest neighbors (K-NN), and Gaussian Naive Bayes (GNB), with SVM performing best due to its ability to handle non-linear data. The model classifies DR into five severity levels, from no DR to proliferative DR. A balanced dataset of 2,500 images from Kaggle was used for training and testing. The system achieved its highest accuracy of 51.8% when using both FAZ and MA as input features. Experimental results showed that SVM outperformed other classifiers in most evaluation metrics. Limitations were noted in segmentation quality, which affects classification accuracy. The study highlights the potential of using machine learning for DR screening and suggests adding more retinal features in future work for improved performance.
              </p>
              <a
                href="https://link.springer.com/chapter/10.1007/978-981-15-3287-0_8"
                className="text-blue-600 hover:underline"
                target='_blank'
              >
                Link to paper →
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:bg-gray-50 text-left w-3/4">
              <h2 className="text-xl font-bold text-gray-900">Applicability of lightweight stream cipher in crowd computing: a detailed survey and analysis</h2>
              {/* <p className="text-gray-600 text-sm italic mb-2">Bachelor’s Thesis</p> */}
              <p className="text-gray-700 mb-2">
              ​In this paper, we explore the integration of lightweight stream ciphers into crowd computing environments, which combine crowdsourcing, automation, and machine learning. We discuss the taxonomy, characteristics, and cryptographic features of stream ciphers, emphasizing their advantages in securing communications within heterogeneous networks involving devices like mobile phones and IoT devices. Efficient encryption methods are crucial for safeguarding private information and ensuring data integrity in such networks. We examine various stream cipher designs, including hardware implementations like Feedback Shift Registers (FSRs) and software implementations utilizing operations such as modular addition, rotation, and XOR (ARX). Additionally, we present a case study on the Sprout cipher, evaluating its randomness properties using statistical tests. We conclude by identifying research challenges and emphasizing the need for optimized lightweight cryptographic algorithms tailored for resource-constrained devices in crowd computing scenarios.
              </p>
              <a
                href="https://www.taylorfrancis.com/chapters/edit/10.1201/9780429453731-9/applicability-lightweight-stream-cipher-crowd-computing-detailed-survey-analysis-subhrajyoti-deb-rohit-upadhya-bubu-bhuyan?context=ubx&refId=e6c51f96-0642-4221-980d-b6f70931842f"
                className="text-blue-600 hover:underline"
                target='_blank'
              >
                Link to paper →
              </a>
            </div>
          </div>
          
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Paper Reviews</h1>
        <h4 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Coming Soon</h4>
        </div>
    );
  }
  