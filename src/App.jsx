import React, { useState, useEffect } from 'react';
import './App.css'
import { Music, Download, Github, Code, Volume2, Moon, Waves, Play, Pause, Terminal } from 'lucide-react';

export default function LofiCodeLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Music, title: 'Offline Playback', desc: 'No ads, no distractions. Just pure lofi vibes.' },
    { icon: Moon, title: 'Dark Minimalist UI', desc: 'Easy on the eyes during long coding sessions.' },
    { icon: Waves, title: 'Smooth Visualizer', desc: 'Watch your beats come alive with custom waveforms.' },
    { icon: Terminal, title: 'Built with Electron', desc: 'Cross-platform desktop app for Windows, macOS, Linux.' },
    { icon: Volume2, title: 'Custom Playlists', desc: 'Add your own tracks and control volume seamlessly.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-8 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Music className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold">Lofi-Code</span>
        </div>
        <a 
          href="https://github.com/adriel-babalola/lofi-code" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 border border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-all"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
      </nav>

      {/* Hero Section */}
      <section className={`relative z-10 container mx-auto px-8 py-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Lofi-Code
          </h1>
          <p className="text-3xl md:text-4xl font-light mb-4 text-purple-200">
            Code. Chill. Create.
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            A minimalist lofi music player for coders, built with Electron.js. Stay focused with chill beats — fully offline and distraction-free.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href='https://github.com/adriel-babalola/lofi-code/releases/download/v1.0.0/lofi-code.Setup.1.0.0.exe' download className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:scale-105 transition-all shadow-lg shadow-purple-500/50 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download for Windows (.exe)</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </a>
            <a href='https://github.com/adriel-babalola/lofi-code/releases/download/v1.0.0/lofi-code.1.0.0.msi' download className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download Installer (.msi)</span>
            </a>
          </div>
          <p className="text-sm text-gray-400">v1.0.0 • Built with Electron.js • Windows, macOS, Linux</p>
        </div>

        {/* Visual Element */}
        <div className="mt-16 relative">
          <div className="w-full max-w-3xl mx-auto h-64 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center overflow-hidden">
            <div className="flex space-x-2">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 200 + 20}px`,
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: `${Math.random() * 2 + 1}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-purple-200">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl backdrop-blur-sm border transition-all duration-500 ${
                activeFeature === idx
                  ? 'bg-purple-500/20 border-purple-400 scale-105'
                  : 'bg-purple-900/20 border-purple-500/30 hover:bg-purple-500/10'
              }`}
            >
              <feature.icon className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 container mx-auto px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-purple-200">About Lofi-Code</h2>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Lofi-Code was created to help developers stay focused and inspired while coding. It's a simple, lightweight player for chill lofi vibes — fully offline and distraction-free. Whether you're debugging at 3 AM or building your next big project, Lofi-Code keeps you in the zone.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Built with Electron.js, HTML, CSS, and JavaScript, this cross-platform desktop app brings the cozy atmosphere of lofi beats directly to your workflow. No internet required, no data collection, just pure focus.
            </p>
            <p className="text-purple-400 font-semibold text-lg">— By Adriel Babalola</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-8 py-20">
        <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm border border-purple-400/50">
          <h2 className="text-4xl font-bold mb-6">Ready to Code with Chill Vibes?</h2>
          <p className="text-xl text-gray-300 mb-8">Download Lofi-Code and transform your coding sessions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='https://github.com/adriel-babalola/lofi-code/releases/download/v1.0.0/lofi-code.Setup.1.0.0.exe' download className="px-8 py-4 bg-white text-purple-900 rounded-lg font-bold text-lg hover:scale-105 transition-all shadow-lg flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download .exe</span>
            </a>
            <a href="https://github.com/adriel-babalola/lofi-code/releases/download/v1.0.0/lofi-code.1.0.0.msi" download className="px-8 py-4 bg-white text-purple-900 rounded-lg font-bold text-lg hover:scale-105 transition-all shadow-lg flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download .msi</span>
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">No data collection • Runs fully offline • Open source</p>
        </div>
      </section>


      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-500/30 py-12">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5" />
              </div>
              <span className="text-lg font-semibold">Lofi-Code</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/adriel-babalola/lofi-code" className="text-gray-400 hover:text-purple-400 transition-colors">GitHub</a>
              <a href="https://github.com/adriel-babalola/lofi-code/issues" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
              <a href="https://github.com/adriel-babalola/lofi-code/blob/main/PRIVACY.md" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy</a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400 text-sm">
            <p>© 2025 Adriel Babalola • MIT License</p>
            <p className="mt-2">Enjoy coding with LOFI vibes! 🎧🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
}