

export default function BlogsPage() {
    return (
      <div className="max-w-5xl mx-auto space-y-4 py-8 text-center" >
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">My Thoughts</h1>

        
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:bg-gray-50 text-left w-3/4">
              <h2 className="text-xl font-bold text-gray-900">Do LLMs think?</h2>
              <p className="text-gray-700 mb-2">
                It has been quite established by now that LLMs usually regurgitate whatever has been fed to them, given a relevant query. That being said, there must be more going under the hood, more nuance that might only come to light if we are able to trace the thoughts of an LLM.
              </p>
              <a
                href="/blog/blogs/llms_think"
                className="text-blue-600 hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>

        {/* <div className="space-y-6">
          <div className="flex justify-center">
            <div className="bg-white border rounded-lg shadow-sm p-6 hover:bg-gray-50 text-left w-3/4">
              <h2 className="text-xl font-bold text-gray-900">Do LLMs think?</h2>
              <p className="text-gray-700 mb-2">
                It has been quite established by now that LLMs usually regurgitate whatever has been fed to them, given a relevant query. That being said, there must be more going under the hood, more nuance that might only come to light if we are able to trace the thoughts of an LLM.
              </p>
              <a
                href="/blog/blogs/llms_think"
                className="text-blue-600 hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        </div> */}


        </div>
    );
  }
  