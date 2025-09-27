export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to CS Matthew
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Personal portfolio showcasing my journey as a creative thinker and problem-solver, 
            blending the artistic rigour of my architecture studies with the technical precision of programming.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700">
              Highlights my projects and skills developed during my BA and MArch Architecture studies 
              and my ongoing passion for software development.
            </p>
            <div className="flex justify-center space-x-6 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                View Projects
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors">
                About Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
