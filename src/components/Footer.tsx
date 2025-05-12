import React from 'react';
import { Github as GitHub, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield size={20} className="text-cyan-400 mr-2" />
            <span className="text-gray-300">Prodigy_CS_Task_02 | Image Encryption Tool</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/YourUsername/Prodigy_CS_Task_02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <GitHub size={20} />
            </a>
            <span className="text-gray-500">© {new Date().getFullYear()} P Ganesh Krishna Reddy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;