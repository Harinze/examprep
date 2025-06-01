import { jsx as _jsx } from "react/jsx-runtime";
const ResetButton = ({ onReset }) => {
    const handleReset = () => {
        localStorage.removeItem("answered");
        localStorage.removeItem("score");
        if (onReset) {
            onReset();
        }
    };
    return (_jsx("button", { onClick: handleReset, className: "bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700", children: "Reset Progress" }));
};
export default ResetButton;
