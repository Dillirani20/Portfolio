import React from 'react';
import { Code, Globe, Database, Brain, Languages, Award, Briefcase } from 'lucide-react';

const About = () => {
  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Time Management',
    'Adaptability',
    'Leadership'
  ];

  const languages = [
    { name: 'English', level: 'Professional' },
    { name: 'Tamil', level: 'Native' },
    { name: 'Telugu', level: 'Basic' },
    { name: 'Hindi', level: 'Basic' }
  ];

  const certifications = [
    {
      name: 'Python Programming',
      issuer: 'IBM',
      date: '2023'
    },
    {
      name: 'AI ML Virtual Internship',
      issuer: 'Google',
      date: '2024'
    },
    {
      name: 'Python Data Analytics',
      issuer: 'Coursera',
      date: '2024'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Enthusiastic and dedicated MCA student possessing a strong academic background in Computer Science and core
              related subjects, coupled with proficiency in programming languages and a keen interest in innovative technologies.
              Eager to contribute to a dynamic environment while honing skills in networking, software engineering, and
              problem-solving.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My passion lies in creating intuitive user experiences backed by robust architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <Code className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-gray-600 text-sm">
                HTML, CSS, JavaScript
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <Database className="text-green-600 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-gray-600 text-sm">
                Python, Java, SQLite
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <Globe className="text-purple-600 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Framework</h3>
              <p className="text-gray-600 text-sm">
                Django, Bootstrap
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <Briefcase className="text-orange-600 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Tools</h3>
              <p className="text-gray-600 text-sm">
                Git, VS Code, Power BI
              </p>
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Brain className="mr-2 text-purple-600" />
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Languages className="mr-2 text-blue-600" />
            Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-1">{language.name}</h4>
                <p className="text-gray-600 text-sm">{language.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Award className="mr-2 text-green-600" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-2">{cert.name}</h4>
                <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;