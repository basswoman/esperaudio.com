import React, { useState, useEffect } from 'react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [setHoveredDemo] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Option 1: Using Formspree (recommended)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', project: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="font-sans text-gray-100 bg-black min-h-screen overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black"></div>
        <div
          className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/80 border-b border-cyan-500/20">
        <div className="flex justify-between items-center px-8 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Esper Audio
          </h1>
          <nav className="space-x-8 text-sm tracking-wide">
            <a
              href="#demos"
              className="hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#services"
              className="hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.3}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Sound
            </span>
            <span className="block text-4xl md:text-6xl text-gray-400 font-light">
              that brings stories
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              to life
            </span>
          </h2>

          <div className="max-w-2xl text-lg text-gray-300 mb-8 leading-relaxed">
            <div className="border-l-2 border-cyan-400/50 pl-6">
              Immersive audio design for film, games, and digital experiences.
              <br />
              <span className="text-cyan-300">
                Connecting people to stories through sound.
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="#demos"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold tracking-wide rounded-lg border border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Listen to Our Work
            </a>
            {/* 
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mt-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-8 bg-cyan-400/30 animate-pulse`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
              <span>Audio Visualization</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* Demos */}
      <section id="demos" className="relative px-8 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 text-white">Demo Reels</h3>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'UX Sound Design',
              desc: 'Interface sounds, product interactions, and audio branding for digital experiences.',
              color: 'cyan',
            },
            {
              title: 'Film & Animation',
              desc: 'Sound effects, foley and music composition that enhances narrative storytelling.',
              color: 'purple',
            },
            {
              title: 'Art Installation',
              desc: 'Soundscapes and site-specific audio for gallery and public space installations.',
              color: 'blue',
            },
          ].map((demo, i) => (
            <div
              key={i}
              className="group relative"
              onMouseEnter={() => setHoveredDemo(i)}
              onMouseLeave={() => setHoveredDemo(null)}
            >
              <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-none p-8 transition-all duration-500 hover:border-cyan-400/50 hover:bg-gray-800/50">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-semibold text-white">
                    {demo.title}
                  </h4>
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {demo.desc}
                </p>

                {/* Audio visualizer placeholder */}
                <div className="aspect-video bg-black/50 border border-gray-700 rounded-lg mb-4 relative overflow-hidden group-hover:border-cyan-400/50 transition-colors duration-300">
                  {i === 0 && (
                    // YouTube embed for UX Sound Design
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/KRkLsIj1zzc?si=G-0YUc_nqUZkmNyQ"
                      title="UX Sound Design Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  )}

                  {i === 1 && (
                    // YouTube embed for Film & Animation
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/oQQGwtASLp4?si=pRrbCc3Fv7QyqIyg"
                      title="Film & Animation Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  )}

                  {i === 2 && (
                    // YouTube embed for Art Installation
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/MwHvql4unrI?si=frT9Z3POMZWP1bvV"
                      title="Art Installation Demo"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                      className="rounded-lg"
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative px-8 py-24 bg-gradient-to-b from-black via-gray-900/20 to-black"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">SERVICES</h3>
            <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-lg">
            {[
              {
                icon: '🎧',
                service: 'UX & Product Sound Design',
                desc: 'Interactive audio experiences',
              },
              {
                icon: '🎬',
                service: 'Film & Animation Sound',
                desc: 'Cinematic audio storytelling',
              },
              {
                icon: '🎮',
                service: 'Game & Interactive Audio',
                desc: 'Immersive game soundscapes',
              },
              {
                icon: '🎵',
                service: 'Custom Music & Atmospheres',
                desc: 'Bespoke audio compositions',
              },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="bg-gray-900/30 backdrop-blur border border-gray-800 p-8 transition-all duration-500 hover:border-cyan-400/50 hover:bg-gray-800/30">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                      {item.icon}
                    </span>
                    <div>
                      <h4 className="font-semibold text-white">
                        {item.service}
                      </h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>

                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 w-0 group-hover:w-full transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative px-8 py-24 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4 text-white">About</h3>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur border border-gray-800 p-12">
          {/* <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">7</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">25</div>
              <div className="text-sm text-gray-400">Countries Served</div>
            </div>
          </div> */}

          <div className="border-l-2 border-cyan-400/50 pl-8">
            <p className="text-lg text-gray-200 leading-relaxed">
              We are sound designers, composers and musicians with experience
              across multiple industries. Our work combines{' '}
              <span className="text-cyan-300">creativity</span> and{' '}
              <span className="text-purple-300">technical precision</span> to
              deliver audio that supports storytelling, user experience, and
              emotional impact.
            </p>

            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              We collaborate closely with clients worldwide, from startups to
              studios, creating audio experiences that{' '}
              <span className="text-cyan-300">resonate</span> and{' '}
              <span className="text-purple-300">inspire</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative px-8 py-24 bg-gradient-to-b from-black via-gray-900/30 to-black"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-white">Contact</h3>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-12"></div>

          <div className="bg-gray-900/30 backdrop-blur border border-gray-800 p-12">
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Let's make your project sound{' '}
              <span className="text-cyan-300">unforgettable</span>.
            </p>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-green-300 text-center">
                Thanks for reaching out! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-300 text-center">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="ux-sound">UX & Product Sound Design</option>
                  <option value="film-animation">Film & Animation Sound</option>
                  <option value="game-interactive">
                    Game & Interactive Audio
                  </option>
                  <option value="custom-music">
                    Custom Music & Atmospheres
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-block px-12 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold tracking-wide rounded-lg border border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            {/* <div className="text-sm text-gray-500 mt-8 text-center">
              Or email us directly at{' '}
              <a
                href="mailto:hello@esperaudio.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                hello@esperaudio.com
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 text-center py-8 text-gray-500 text-sm">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"></div>
          <span>
            © {new Date().getFullYear()} Esper Audio — All Rights Reserved
          </span>
          <div className="w-2 h-2 bg-purple-400/50 rounded-full animate-pulse"></div>
        </div>
      </footer>
    </div>
  );
}
