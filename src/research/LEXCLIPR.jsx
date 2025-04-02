export default function Lexclipr(){
    return(
        <div className="max-w-5xl mx-auto space-y-4 py-8" >
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Cross-Lingual Query based Paragraph Retrieval for European Court of Human Rights Judgements</h2>
                <div className="flex justify-center">
                    <img className="object-contain center w-full rounded-t-lg  md:w-96 md:h-96 md:rounded-none md:rounded-s-lg" src="/assets/ghibli_lexclipr.png" alt="" />
                </div>
            </div>
            <h4 className="text-2xl font-extrabold text-gray-900 mb-2">Introduction</h4>
            <p className="text-gray-700 mb-2 text-justify">
            Searching for relevant infomration in a case law is one of the fundamental activities of a law professional. However, as one can image this is a very taxing work where numerous hours, (by some estimates over 30% of a legal professional's time) are spent to sift through these dense documents. Thus there is a need to have an advanced retreival system that accurately and efficiently, thus enabling legal professionals and lawyers to spend their time on more productive tasks.
            </p>
            <p className="text-gray-700 mb-2 text-justify">
            Legal information retreival (IR) presents various challenges. Firstly, legal text is extremely domain specific with very domain specific jargon that is not present in day to day language. Secondly, legal documents are distinctly complex having contorted argumentation presented in a structured manner. Thirdly, there is varied amount of structural dependemcy where one part of the document might attend to a completely different part of the same document, or different documents might cite and attend to another document altogether. Fourth, the legal landscape is quite dynamic and ever changing. Finally, with the globalization of legal practice, it becomes imperative that retrieval systems support diverse languages, especially in multijurisdiction settings. Courts spanning multiple countries such as ECHR, ICC, ICJ, PCA, ECJ, ITLOS, ECOWAS, AfCHPR, etc. as well as courts that have multiple official languages such as India, Switzerland, South Africa, Spain, etc. there is a need for a sophisticated retrieval systems that bridge language barriers, mapping queries and context across languages. Such legal systems not only have to understand the jargon and intricacies of legal documents, but also need to understand the nuances and variations between languages.
            </p>
            <p className="text-gray-700 mb-2 text-justify">
            Legal IR has become quite important in the Legal Domain, where Lawyers need to find statues, presedents, and documents from vast repositories. This includes retrieving relevant legislation, prior cases, civil codes, and patents, among others. This research dealt with the issue of legal case retreival, specifically fine-grained paragraph retreival from a larger case document.
            </p>
            <p className="text-gray-700 mb-2 text-justify">
            We presented three contributions to the legal domain as part of this research work. Firstly, we presetned a new dataset called LexCLiPR—A Legal Cross-Lingual Paragraph Retrieval dataset based on ECtHR judgements. This contains query-judgment pairs having queries in seven different languages mapped to English judgments. The dataset is presetned in GitHub, as part of HuggingFace dataset, and can also be played around in Kaggle. The queries are obtained from the concatenated section headers, while the relevant signal are obtained from the discussions that contain citations to the English ECtHR judgments. In addition, the dataset has been divided such that the systems being built on top of this dataset are able to generalize during the retrieval process.
            </p>
            <div className="flex flex-col items-center justify-center text-center space-y-8">
                <figure id="fig1" className="mx-auto">
                    <img
                    className="object-contain w-full rounded-t-lg md:w-96  md:rounded-none md:rounded-s-lg"
                    src="/assets/toc_turkish.jpg"
                    alt="Illustration of the Table of Contents from the Turkish case law guide on Terrorism"
                    />
                    <figcaption className="mt-2 text-gray-700 text-xs md:w-96">
                    Fig.1: Illustration of the Table of Contents from the Turkish case law guide on Terrorism, facilitating the derivation of legal concept queries for the LexCLiPR dataset.
                    </figcaption>
                </figure>

                <figure id="fig2" className="mx-auto">
                    <img
                    className="object-contain w-full rounded-t-lg md:w-96  md:rounded-none md:rounded-s-lg"
                    src="/assets/case_citation_turkish.jpg"
                    alt="Illustration of contents of a case law guide with explicit references to relevant paragraphs in ECtHR judgments"
                    />
                    <figcaption className="mt-2 text-gray-700 text-xs md:w-96">
                    Fig.2: Illustration of the case law guide, showing how legal concepts are discussed with explicit references to relevant paragraphs in ECtHR judgments, enabling the derivation of relevance signals for LexCLiPR.
                    </figcaption>
                </figure>

                <figure id="fig3" className="mx-auto">
                    <img
                    className="object-contain w-full rounded-t-lg md:w-96  md:rounded-none md:rounded-s-lg"
                    src="/assets/dataset_judgement.png"
                    alt="Illustration of the cited paragraph from the relevant judgement document."
                    />
                    <figcaption className="mt-2 text-gray-700 text-xs md:w-96">
                    Fig.3: Illustration of the cited paragraph from the relevant judgement document.
                    </figcaption>
                </figure>
            </div>

            <p className="text-gray-700 mb-2 text-justify">
            The queries were collected by highlighting the topics and subtopics of the articles, picking them up, and concatinating them to form one query. We also call them legal concepts. This is illustrated in {' '}<a href="#fig1" className="text-blue-600 hover:underline">Figure 1</a> using the Turkish case law guide on Terrorism. Each of the section/subsection has explanation of what the (sub)section entails ({' '}<a href="#fig2" className="text-blue-600 hover:underline">Figure 2</a>), and has citation to various previous judgements along with the particular paragraph that is of interest. We ontain the relevant judgements and paragraphs from here. Finally, after obtaining the cited judgements, we extract the same judgements from the{' '}<a href="https://hudoc.echr.coe.int/" className="text-blue-600 hover:underline" target="_blank">HUDOC</a> public database ({''}<a href="#fig3" className="text-blue-600 hover:underline">Figure 3</a>). The cited paragraphs under each (sub)section is taken as the paragraphs of relevance. So now we have our query collected from the sections and subsections of the Articles, the cited judgements from the explanation of the (sub)section, all the paragraphs pertaining to this judgements from HUDOC, and the cited relevant paragraph numbers from the artiles, while the paragraph itself as part of the extracted judgement from HUDOC. Our task is to accurately retreive these relevant paragraphs from all the paragraphs of the judgement, given a query.
            </p>
            <p className="text-gray-700 mb-8 text-justify">
                The LexCLiPR dataset has been divided into 2 parts-Seen and Unseen queries. The Seen-query split is a proxy for all the legal concepts that are already present in the domain, while the Unseen-query split represent all the concepts that might enter the domain at a later date. The Seen-query split is further divided into the train, val and test sets. The Unseen-query split is just used for testing the various models' capability to generalize to unseen legal concepts.
            </p>
            <h4 className="text-2xl font-extrabold text-gray-900 mb-2">Methodology</h4>
            <p className="text-gray-700 mb-6 text-justify">
                We applied three levels of methods to work with our LexCLiPR dataset.
            </p>
            <h5 className="text-l font-extrabold text-gray-900 mb-2">Zero-Shot Experiments</h5>
            <p className="text-gray-700 mb-2 text-justify">
                The Zero-Shot experiments helped us to establish the capabilities of various Monolingiual and Multilingual LMs on task-specific and domain-specific data.  We made use of the BM25 Lexical method to establish a lexical baseline. Since our judgement paragraphs are all in English, we needed to translate the queries in languages other than English into English. For this we made use of <a href="https://huggingface.co/facebook/nllb-200-3.3B" className="text-blue-600 hover:underline" target="_blank">META’s NLLB-200</a> model. We use the following models to build our baselines on : <a href="https://www.huggingface.co/google-bert/bert-base-uncased" className="text-blue-600 hover:underline" target="_blank">BERT</a>, <a href="https://www.huggingface.co/google-bert/bert-base-multilingual-cased" className="text-blue-600 hover:underline" target="_blank">mBERT</a>, <a href="https://www.huggingface.co/facebook/dpr-ctx_encoder-single-nq-base" className="text-blue-600 hover:underline" target="_blank">DPR</a>, <a href="https://www.huggingface.co/castorini/mdpr-tied-pft-msmarco" className="text-blue-600 hover:underline" target="_blank">mDPR</a>, and <a href="https://www.huggingface.co/joelniklaus/legal-xlm-roberta-base" className="text-blue-600 hover:underline" target="_blank">mLegalBERT</a> models.
            </p>

            <h5 className="text-l font-extrabold text-gray-900 mb-2">Fine-Tuning Experiments</h5>
            <p className="text-gray-700 mb-3 text-justify">
                With the fine-tuning experiments we look to establish the fact that fine-tuning a pretrined model on domain-specific data generally improves its capability of retreival. <a href="#fig4" className="text-blue-600 hover:underline">Figure 4</a> describes the finetuning process. Since each query might have many paragraphs cited from a single judgement, we lable all these cited paragraphs as positive paragraphs, and the rest of the uncited paragraphs are labelled as negative paragraphs. For each positive paragraph we pick up seven negative paragraphs at random. This forms one iteration of our finetuning process. We pass these paragraphs and the query through an encoder pipeline, obtain the encodings of each of the paragraphs, and the query. We then apply cosine similarity between individual paragraph embeddings and the query. We obtain these results as our logits after a softmax function, and then apply contrastive loss to fine-tune our models.
            </p>
            <div className="flex flex-col items-center justify-center text-center space-y-8">
                <figure id="fig4" className="mx-auto">
                    <img
                    className="object-contain w-full rounded-t-lg md:w-96  md:rounded-none md:rounded-s-lg"
                    src="/assets/fine_tune_process_1.png"
                    alt="Illustration of contents of a case law guide with explicit references to relevant paragraphs in ECtHR judgments"
                    />
                    <figcaption className="mt-2 text-gray-700 text-xs md:w-96">
                    Fig.4: Fine-Tuning Pipeline.
                    </figcaption>
                </figure>

                <figure id="fig5" className="mx-auto">
                    <img
                    className="object-contain w-full rounded-t-lg md:w-96  md:rounded-none md:rounded-s-lg"
                    src="/assets/siamese.png"
                    alt="Illustration of contents of a case law guide with explicit references to relevant paragraphs in ECtHR judgments"
                    />
                    <figcaption className="mt-2 text-gray-700 text-xs md:w-96">
                    Fig.5: Siamese Encoder Architecture.
                    </figcaption>
                </figure>

                <figure id="fig6" className="mx-auto">
                    <img
                    className="object-contain w-full rounded-t-lg md:w-96  md:rounded-none md:rounded-s-lg"
                    src="/assets/two_tower.png"
                    alt="Illustration of contents of a case law guide with explicit references to relevant paragraphs in ECtHR judgments"
                    />
                    <figcaption className="mt-2 text-gray-700 text-xs md:w-96">
                    Fig.6: Two-Tower Encoder Architecture.
                    </figcaption>
                </figure>
            </div>
        </div>
        
    );
}