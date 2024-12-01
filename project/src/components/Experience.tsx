import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Python Full Stack Developer Intern',
      company: 'Retech Solutions Ltd',
      period: 'May 2024 - July 2024',
      description: ' Developed full stack projects using the Python Django framework: an online grocery store, a hotel management system and a doctor appointment app',
      technologies: ['Django', 'Python', 'HTML', 'Bootstrap', 'JS', 'CSS']
    },
    {
      title: 'Web Developer Intern',
      company: 'CodesonBytes',
      period: ' Sep 2023– Oct 2023',
      description: 'Designed and implemented a sign-up form and to-do list using HTML, CSS and JavaScript; achieving a 20% improvement in user experience.Developed and launched a user-friendly Unit Converter and E-commerce landing page, resulting in a 25% surge in website conversions',
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <Building2 size={18} className="mr-2" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                  <Calendar size={18} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;