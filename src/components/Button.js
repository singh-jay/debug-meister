import React from 'react';

const Button = ({ label, variant = 'success', onClick }) => {
  return (
    <button
      className={`px-4 py-2 font-semibold text-sm text-white rounded-md shadow-sm ${
        variant === 'success' ? 'bg-slate-500' : 'bg-rose-600'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
