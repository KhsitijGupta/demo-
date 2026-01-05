import React from "react";

const Button = ({
    children,
    className = "",
    type = "button",
    disabled = false,
    onClick,
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`px-4 py-2 rounded-md text-sm font-medium 
        bg-blue-600 text-white hover:bg-blue-700 
        disabled:opacity-50 disabled:cursor-not-allowed
        transition ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
