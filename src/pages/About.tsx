import React from 'react';
import { Github as GitHub, Mail, Linkedin, Globe, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
          About Me
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="p-6 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-4xl font-bold mb-4">
                GK
              </div>
              <h2 className="text-xl font-bold text-white mb-2">P. Ganesh Krishna Reddy</h2>
              <p className="text-cyan-400 mb-4">Cybersecurity Enthusiast</p>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/ganeshkrishnareddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub size={18} />
                </a>
                <a
                  href="mailto:pganeshkrishnareddy@gmail.com"
                  className="p-2 bg-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/pganeshkrishnareddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">About Me</h3>
              <p className="text-gray-300 mb-4">
                I am a cybersecurity enthusiast and a student at Lovely Professional University (LPU), 
                with a strong foundation in networking and access control mechanisms. I have a growing 
                interest in ethical hacking, system security, and user authentication protocols.
              </p>
              <p className="text-gray-300">
                Over the past few years, I have developed practical skills through academic projects 
                and self-learning in areas like firewalls, encryption, intrusion detection systems, 
                and network monitoring tools such as Wireshark. I also cleared the CompTIA Network+ 
                global certification, which further strengthened my understanding of network 
                infrastructure and security protocols.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="flex items-center text-lg font-semibold text-white mb-4">
                  <Shield size={18} className="text-cyan-400 mr-2" />
                  Project Purpose
                </h3>
                <p className="text-gray-300">
                  This cybersecurity internship project is an exciting opportunity for me to apply my 
                  technical knowledge in real-world scenarios and gain hands-on experience in securing 
                  digital environments. I am passionate about contributing to cybersecurity advancements 
                  and building robust solutions to protect data and systems.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Technical Skills</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">Network Security</span>
                      <span className="text-cyan-400">90%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">Cybersecurity</span>
                      <span className="text-cyan-400">85%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">Ethical Hacking</span>
                      <span className="text-cyan-400">75%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-4">More About This Project</h3>
          <p className="text-gray-300 mb-4">
            <span className="font-medium text-cyan-400">Prodigy_CS_Task_02</span> is part of my internship 
            at Prodigy InfoTech, where I'm working on various cybersecurity-related tasks and projects. 
            This particular project focuses on visual data encryption techniques using JavaScript and the HTML5 Canvas API.
          </p>
          <p className="text-gray-300">
            The project showcases several simple but effective pixel manipulation techniques that can be used 
            to encrypt images. While these methods aren't cryptographically secure enough for 
            highly sensitive data, they demonstrate the core principles of image encryption in an 
            interactive and educational way.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Me</h3>
          <p className="text-gray-300 mb-6">
            Have questions about this project or interested in collaborating? Feel free to reach out to me!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="mailto:pganeshkrishnareddy@gmail.com" 
              className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Mail size={20} className="text-cyan-400 mr-3" />
              <span className="text-gray-200">pganeshkrishnareddy@gmail.com</span>
            </a>
            <a 
              href="tel:+918374622779" 
              className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Globe size={20} className="text-cyan-400 mr-3" />
              <span className="text-gray-200">+91-8374622779</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;