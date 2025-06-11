const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-600">InterviewPrep</span>. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
