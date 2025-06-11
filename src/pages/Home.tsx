import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaBrain, FaDatabase, FaCss3Alt, FaHtml5 } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-100 text-gray-800 px-4 py-10 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
        
        {/* Hero Section */}
        <header className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-700 drop-shadow-sm">
            InterviewPrep Academy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Level up your tech career with interactive quizzes and prep tools in React, Kubernetes, JavaScript, AI, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link to="/kcna-exam">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base sm:text-lg shadow-md transition">
                Start KCNA Quiz
              </button>
            </Link>
            <Link to="/react-prep">
              <button className="bg-white border border-gray-300 hover:border-gray-400 text-gray-800 px-6 py-3 rounded-full text-base sm:text-lg shadow-md transition">
                React Quiz
              </button>
            </Link>
          </div>
        </header>

        {/* Domain Grid */}
        <section className="w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Master 20+ Interview Domains
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center">
            {[
              { icon: <FaReact className="text-blue-500" />, label: "React" },
              { icon: <FaNodeJs className="text-green-600" />, label: "Node.js" },
              { icon: <FaBrain className="text-purple-600" />, label: "AI / ML" },
              { icon: <FaCss3Alt className="text-blue-700" />, label: "CSS" },
              { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
              { icon: <FaDatabase className="text-emerald-700" />, label: "Databases" },
            ].map(({ icon, label }, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className="text-4xl sm:text-5xl">{icon}</div>
                <span className="text-sm sm:text-base font-medium">{label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
