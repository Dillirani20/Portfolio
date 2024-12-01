import React from 'react';
import { ArrowRight, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/5 mb-6">
              <Code size={20} className="mr-2 text-purple-600" />
              <span className="text-sm font-medium">Python Developer</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Crafting Digital Excellence
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transforming ideas into elegant, scalable solutions with modern web technologies and thoughtful design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all"
              >
                Let's Connect
                <Sparkles className="ml-2" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                alt="Portfolio Hero"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20"></div>
            </div>
            
            {/* Floating skill badges */}
            <div className="absolute -right-4 top-1/4 glass-card p-3 rounded-lg shadow-lg animate-float" style={{ animationDelay: '-1s' }}>
              <span className="font-semibold text-sm">Django Expert</span>
            </div>
            <div className="absolute -left-4 top-2/3 glass-card p-3 rounded-lg shadow-lg animate-float" style={{ animationDelay: '-3s' }}>
              <span className="font-semibold text-sm">Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;