export default function Lexclipr(){
    return(
        <div className="max-w-5xl mx-auto space-y-4 py-8" >
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Cross-Lingual Query based Paragraph Retrieval for European Court of Human Rights Judgements</h2>
                <p className="text-gray-700 mb-2 text-xs">
                {/* Quite a large title isn't it? */}
            </p>
            <div className="flex justify-center">
            <img className="object-contain center w-full rounded-t-lg  md:w-96 md:h-96 md:rounded-none md:rounded-s-lg" src="/assets/ghibli_lexclipr.png" alt="" />
            </div>
            </div>
            <br />
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
        </div>
        
    );
}