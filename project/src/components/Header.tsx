import React from 'react';
import { Menu, Github, Linkedin, Mail, Code2, BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-gray-800">DR</a>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/Dillirani20" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/dillirani/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Linkedin size={20} />
          </a>
          <a href="https://www.geeksforgeeks.org/user/dillirani2020/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <BookOpen size={20} />
          </a>
          <a href="https://leetcode.com/dillirani/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Code2 size={20} />
          </a>
          <a href="mailto:dillirani2026@gmail.com" className="text-gray-600 hover:text-gray-900">
            <Mail size={20} />
          </a>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;