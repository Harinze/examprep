import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-black">
      <h1 className="text-3xl font-bold mb-6">KCNA Exam Prep</h1>
      <p className="mb-4">Welcome! Practice for your Kubernetes and Cloud Native Associate exam.</p>
      <Link to="/kcna-exam">
        <button className="bg-white text-black px-4 py-2 rounded-xl shadow-md hover:bg-blue-100">
          Start Exam
        </button>
      </Link>
    </div>
  );
};

export default Home;
