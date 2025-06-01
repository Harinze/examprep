const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <span>&copy; {new Date().getFullYear()} InterviewPrep. All rights reserved.</span>
        <span className="text-yellow-500">Built with Vite React</span>
      </div>
    </footer>
  );
};

export default Footer;
