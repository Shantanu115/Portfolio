import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className="py-6 lg:py-10 overflow-hidden min-h-[90vh] flex items-center relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-heading/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              👋 Hello, I'm Shantanu Pandey
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            AI/ML Engineer &<br />
            <span className="text-primary">Researcher</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg lg:text-xl text-text/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Final-year B.Tech student specializing in AI and machine learning, with experience spanning computer vision, government research, and full-stack engineering. Passionate about building intelligent systems from raw data to deployed, benchmarked models.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a 
              href="#portfolio" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/85 transition-all hover:-translate-y-1 hover:shadow-lg text-center"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-primary/30 text-primary rounded-full font-medium hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-1 hover:shadow-lg text-center"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-4 mb-12"
          >
            <a 
              href="https://github.com/Shantanu115" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-text/20 flex items-center justify-center text-text/60 hover:text-primary hover:border-primary transition-all hover:-translate-y-1"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/shantanu-pandey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-text/20 flex items-center justify-center text-text/60 hover:text-primary hover:border-primary transition-all hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:Shantanu.pandey47@gmail.com"
              className="w-12 h-12 rounded-full border-2 border-text/20 flex items-center justify-center text-text/60 hover:text-primary hover:border-primary transition-all hover:-translate-y-1"
            >
              <FaEnvelope size={20} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center"
            >
              <span className="block text-4xl lg:text-5xl font-bold text-heading">5+</span>
              <span className="text-sm text-text/70 mt-2 block">Projects Completed</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center"
            >
              <span className="block text-4xl lg:text-5xl font-bold text-heading">3</span>
              <span className="text-sm text-text/70 mt-2 block">Internships</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center"
            >
              <span className="block text-4xl lg:text-5xl font-bold text-heading">1</span>
              <span className="text-sm text-text/70 mt-2 block">Conference Paper</span>
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-text/60 hover:text-primary transition-colors"
            >
              <FaArrowDown size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
