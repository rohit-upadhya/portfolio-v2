export default function LlmsThink(){
    return(
        <div className="max-w-5xl mx-auto space-y-4 py-8" >
            <div>
            <a href="#" className="text-blue-600 hover:underline" onClick={(e) => { e.preventDefault(); onClose(); }}>← Back to Research</a>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Do LLMs Think?</h2>
            </div>
            <div className="flex justify-center">
                    <img className="object-contain center w-full rounded-t-lg  md:w-96 md:h-96 md:rounded-none md:rounded-s-lg" src="/portfolio-v2/assets/robot_thinking.png" alt="" />
                </div>
            <br />
            <p className="text-gray-700 mb-2">
                As a disclaimer, this writing isn't comprehensive, well researched or even complete. It is a question that I ponder over often, and as I find more information on this topic, this blog will certainly change. How do these machine learning models think. While it is true that we are yet to figure the exact inner workings of a Neural-Network, there have been numerous studies by the major AI providers of today like Anthropic and OpenAI. Some of this research has proven that neural networks abstract real world concepts into 'features'. I will not go into details here, but it is an intersting question nonetheless. 
            </p>
            <p className="text-gray-700 mb-2">
                They have used something called a sparse autoencoder, that tries to measure how the various neurons fire up at a given layer, given a particular input. Anthropic's paper is linked <a href="https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html" className="text-blue-600 hover:underline">here</a>. Again, I am not sure if this is even the latest research (judging by the fact that it was published in May 2024, it does not appear to be bleeding edge anymore lol). I will be sure to add more content here, as and when I update my knowledge.
            </p>
        </div>
        
    );
}