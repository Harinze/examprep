import React from "react";

interface ResetButtonProps {
  onReset?: () => void; 
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
  const handleReset = () => {
    localStorage.removeItem("answered");
    localStorage.removeItem("score");

    if (onReset) {
      onReset();
    }
  };

  return (
    <button
      onClick={handleReset}
      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
    >
      Reset Progress
    </button>
  );
};

export default ResetButton;
