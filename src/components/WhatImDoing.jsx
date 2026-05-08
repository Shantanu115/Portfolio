import { motion } from 'framer-motion'
import { FaBrain, FaChartLine, FaCode } from 'react-icons/fa'
import ServiceCard from './ServiceCard'

const services = [
  {
    id: 'computer-vision',
    icon: <FaBrain />,
    title: 'Computer Vision & Deep Learning',
    category: 'AI / ML',
    badge: 'Production Ready',
    description:
      'Building production-ready AI systems for facial recognition, emotion detection, and image classification using CNNs, Transfer Learning, and Ensemble Methods.',
    features: [
      'Facial recognition & emotion detection',
      'Image classification with CNNs',
      'Transfer Learning & Ensemble Methods',
      'Model optimisation & deployment',
    ],
  },
  {
    id: 'data-science',
    icon: <FaChartLine />,
    title: 'Data Science & Analytics',
    category: 'Data',
    badge: 'ETL Pipelines',
    description:
      'Statistical modeling, hypothesis testing, and ETL pipeline development for extracting actionable insights from complex datasets.',
    features: [
      'Statistical modeling & hypothesis testing',
      'ETL pipeline development',
      'Data visualisation & reporting',
      'Predictive analytics',
    ],
  },
  {
    id: 'full-stack',
    icon: <FaCode />,
    title: 'Full-Stack Development',
    category: 'Engineering',
    badge: 'Django · REST · PostgreSQL',
    description:
      'Developing scalable web applications using Django, REST APIs, PostgreSQL, and modern frameworks for end-to-end solutions.',
    features: [
      'Django & REST API development',
      'PostgreSQL database design',
      'React / modern frontend frameworks',
      'Cloud deployment & CI/CD',
    ],
  },
]

const WhatImDoing = () => {
  return (
    <section id="what-im-doing" className="py-16">
      <div className="container mx-auto px-4">
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
              <path
                d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <p className="text-text/75 max-w-2xl mx-auto">
            My areas of expertise in AI/ML, data science, and software engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatImDoing
