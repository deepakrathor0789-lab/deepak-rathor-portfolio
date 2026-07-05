// src/components/ResumeButton.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const ResumeButton = ({ className = '', children }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/full stack resume.pdf');
      if (!response.ok) throw new Error('Resume not found');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Deepak_Rathore_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download resume. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
      disabled={isDownloading}
      className={`px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold rounded-full flex items-center gap-2 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base ${className}`}
    >
      <FaDownload className={isDownloading ? 'animate-spin' : ''} />
      {isDownloading ? 'Downloading...' : (children || 'Download Resume')}
    </motion.button>
  );
};

export default ResumeButton;