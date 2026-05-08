import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBrain, FaChartLine, FaCode, FaMicrochip, FaDatabase, FaFlask } from 'react-icons/fa'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*')

  const portfolioItems = [
    { 
      id: 1, 
      title: 'Facial Emotion Recognition System', 
      category: 'ml',
      icon: <FaBrain className="text-5xl" />,
      description: 'Production-ready 3-class emotion recognition using CoAtNet architecture with real-time face detection and preprocessing pipeline.',
      tags: ['PyTorch', 'CoAtNet', 'Computer Vision'],
      link: 'https://github.com/Shantanu115'
    },
    { 
      id: 2, 
      title: 'ForecastBird', 
      category: 'ml',
      icon: <FaChartLine className="text-5xl" />,
      description: 'Time-series forecasting model using LSTM to predict avian biodiversity trends with end-to-end ETL pipeline fusing eBird data and real-time weather APIs.',
      tags: ['LSTM', 'Time Series', 'ETL'],
      link: 'https://github.com/Shantanu115'
    },
    { 
      id: 3, 
      title: 'EEG Brain-Computer Interface', 
      category: 'iot',
      icon: <FaMicrochip className="text-5xl" />,
      description: 'Real-time signal processing pipeline to acquire raw EEG signals, isolate blink artefacts, and translate them into motor commands driving an Arduino chassis.',
      tags: ['MATLAB', 'Arduino', 'Signal Processing'],
      link: 'https://github.com/Shantanu115'
    },
    { 
      id: 4, 
      title: 'IPO Tracking Application', 
      category: 'web',
      icon: <FaCode className="text-5xl" />,
      description: 'Full-stack web application using Django and PostgreSQL for tracking IPO data with structured financial data storage for analytics.',
      tags: ['Django', 'PostgreSQL', 'REST API'],
      link: 'https://github.com/Shantanu115'
    },
    { 
      id: 5, 
      title: 'Human-Leopard Conflict Analysis', 
      category: 'ml',
      icon: <FaDatabase className="text-5xl" />,
      description: 'Statistical hypothesis testing and data analysis pipeline for identifying predictors of human-leopard conflict using geo-tagged field data.',
      tags: ['Pandas', 'Statistical Analysis', 'Data Science'],
      link: 'https://github.com/Shantanu115'
    },
    { 
      id: 6, 
      title: 'Dynamic Heterogeneous Ensemble', 
      category: 'research',
      icon: <FaFlask className="text-5xl" />,
      description: 'Research paper on efficient facial expression recognition using two-stage cascade over 5 architectures achieving 66.29% Macro F1 on AffectNet.',
      tags: ['Research', 'Deep Learning', 'Ensemble Methods'],
      link: 'https://github.com/Shantanu115'
    },
  ]

  const filters = [
    { label: 'All Work', value: '*' },
    { label: 'Machine Learning', value: 'ml' },
    { label: 'Web Development', value: 'web' },
    { label: 'IoT & Hardware', value: 'iot' },
    { label: 'Research', value: 'research' },
  ]

  const filteredItems = activeFilter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-heading to-primary bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-48 h-5 mx-auto mb-4">
            <svg viewBox="0 0 200 20" className="w-full h-full text-primary opacity-50">
              <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <p className="text-text/75 max-w-2xl mx-auto">
            Projects spanning computer vision, time-series forecasting, IoT, and full-stack development — each one researched, implemented, and deployed.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.value
                  ? 'bg-primary text-white'
                  : 'bg-white/50 text-text hover:bg-primary/15 hover:text-primary hover:-translate-y-0.5'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon Header with Primary Color */}
              <div className="bg-primary p-8 flex items-center justify-center">
                <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-heading group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-text/70 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-text/70 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all group/link"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1 group-hover/link:ml-2 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
