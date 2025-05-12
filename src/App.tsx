import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Shield, User } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const navItems = [
    { title: 'Encryption Tool', path: '/', icon: <Shield size={18} /> },
    { title: 'About Me', path: '/about', icon: <User size={18} /> },
  ];

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <Navbar title="Prodigy_CS_Task_02" navItems={navItems} />
        <main className="flex-grow container mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;