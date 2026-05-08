import { motion } from 'framer-motion'
import { FaBrain, FaChartLine, FaCode } from 'react-icons/fa'

const WhatImDoing = () => {
  const services = [
    {
      icon: <FaBrain className="text-4xl text-primary" />,
      title: 'Computer Vision & Deep Learning',
      description: 'Building production-ready AI systems for facial recognition, emotion detection, and image classification using CNNs, Transfer Learning, and Ensemble Methods.'
    },
    {
      icon: <FaChartLine className="text-4xl text-primary" />,
      title: 'Data Science & Analytics',
      description: 'Statistical modeling, hypothesis testing, and ETL pipeline development for extracting actionable insights from complex datasets.'
    },
    {
      icon: <FaCode className="text-4xl text-primary" />,
      title: 'Full-Stack Development',
      description: 'Developing scalable web applications using Django, REST APIs, PostgreSQL, and modern frameworks for end-to-end solutions.'
    }
  ]

  return (
    <section id="what-im-doing" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-heading to-primary bg-clip-text text-transparent">
            What I'm Doing
          </h2>
          <div className="w-48 h-5 mx-auto mb-4">
            <svg viewBox="0 0 200 20" className="w-full h-full text-primary opacity-50">
              <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <p className="text-text/75 max-w-2xl mx-auto">
            My areas of expertise in AI/ML, data science, and software engineering
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-heading">{service.title}</h3>
              <p className="text-text/70 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatImDoing
