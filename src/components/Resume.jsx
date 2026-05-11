import { motion } from 'framer-motion'

const Resume = () => {
  const workExperience = [
    {
      company: 'Agrim Housing Finance',
      period: 'Nov 2025 - Present',
      position: 'AI/ML Intern',
      description: 'Building production-ready computer vision systems for facial emotion recognition.',
      points: [
        'Built and deployed a production-ready 3-class Facial Emotion Recognition system, selected CoAtNet as the final architecture after systematic evaluation across rule-based, microexpression, and deep learning approaches',
        'Benchmarked competing face-cropping algorithms for real-time deployment, mapping trade-offs between inference latency and classification robustness',
        'Automated data preprocessing via a custom Telegram pipeline, cutting manual data-handling overhead for the team'
      ]
    },
    {
      company: 'Dept. of Forests & Wildlife, Govt. of NCT of Delhi',
      period: 'Dec 2024 - May 2025',
      position: 'Research Intern',
      description: 'Statistical analysis and data pipeline development for wildlife conservation research.',
      points: [
        'Ran statistical hypothesis testing on geo-tagged field data to identify significant predictors of human-leopard conflict across Delhi',
        'Built a Pandas pipeline to clean and transform raw survey data, enabling reliable correlation analysis used directly in policy-level reporting'
      ]
    },
    {
      company: 'Blue Stock Fintech',
      period: 'Jun 2024 - Aug 2024',
      position: 'Software Engineering Intern',
      description: 'Full-stack development for financial data tracking and analytics.',
      points: [
        'Built an IPO-tracking web application using Django and PostgreSQL, supporting structured financial data storage for downstream analytics'
      ]
    }
  ]

  const education = [
    {
      institution: 'Cluster Innovation Centre, University of Delhi',
      period: '2022 - 2026',
      degree: 'B.Tech in Information Technology & Mathematical Innovation',
      description: 'Specializing in AI and machine learning with focus on computer vision and deep learning'
    }
  ]

  const conferences = [
    {
      name: 'ICMSCI 2026',
      period: '2026',
      role: 'Presenter',
      title: 'International Conference on Mathematical Sciences & Computer Intelligence',
      description: 'Presented paper "A Heterogeneous Ensemble Approach for Improving Robustness in Facial Expression Recognition Across Variable Conditions"
    }
  ]

  return (
    <section id="resume" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-heading to-primary bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-48 h-5 mx-auto mb-4">
            <svg viewBox="0 0 200 20" className="w-full h-full text-primary opacity-50">
              <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <p className="text-text/75 max-w-2xl mx-auto">
            A concise index of study, practice, recognition and leadership — spread across design, research and community.
          </p>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-3">Internships & Work Experience</h2>
          <p className="text-lg text-text/75 mb-12">
            Professional experience in AI/ML, computer vision, government research, and full-stack engineering.
          </p>

          <div className="relative">
            <div className="hidden lg:block absolute left-[20%] top-0 bottom-0 w-0.5 bg-primary/15"></div>
            
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col lg:flex-row mb-10 relative"
              >
                <div className="lg:w-1/5 lg:pr-12 mb-6 lg:mb-0">
                  <h4 className="font-semibold text-lg text-heading">{job.company}</h4>
                  <span className="text-primary text-sm">{job.period}</span>
                </div>
                <div className="hidden lg:block absolute left-[20%] top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="lg:w-4/5 lg:pl-12">
                  <h3 className="text-xl font-semibold text-heading mb-2">{job.position}</h3>
                  <p className="text-text/75 mb-3">{job.description}</p>
                  {job.points && (
                    <ul className="list-disc pl-4 space-y-3 text-text/75">
                      {job.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-3">Education</h2>
          <p className="text-lg text-text/75 mb-12">
            Academic background in Information Technology and Mathematical Innovation from University of Delhi.
          </p>

          <div className="relative">
            <div className="hidden lg:block absolute left-[20%] top-0 bottom-0 w-0.5 bg-primary/15"></div>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col lg:flex-row mb-10 relative"
              >
                <div className="lg:w-1/5 lg:pr-12 mb-6 lg:mb-0">
                  <h4 className="font-semibold text-lg text-heading">{edu.institution}</h4>
                  <span className="text-primary text-sm">{edu.period}</span>
                </div>
                <div className="hidden lg:block absolute left-[20%] top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="lg:w-4/5 lg:pl-12">
                  <h3 className="text-xl font-semibold text-heading mb-2">{edu.degree}</h3>
                  <p className="text-text/75">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-3">Conferences & Publications</h2>
          <p className="text-lg text-text/75 mb-12">
            Research presentations at international conferences on AI and machine learning.
          </p>

          <div className="relative">
            <div className="hidden lg:block absolute left-[20%] top-0 bottom-0 w-0.5 bg-primary/15"></div>
            
            {conferences.map((conf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col lg:flex-row mb-10 relative"
              >
                <div className="lg:w-1/5 lg:pr-12 mb-6 lg:mb-0">
                  <h4 className="font-semibold text-lg text-heading">{conf.name}</h4>
                  <span className="text-primary text-sm">{conf.period}</span>
                </div>
                <div className="hidden lg:block absolute left-[20%] top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="lg:w-4/5 lg:pl-12">
                  <h3 className="text-xl font-semibold text-heading mb-2">{conf.role} — {conf.title}</h3>
                  <p className="text-text/75 mb-3">{conf.description}</p>
                  {conf.points && (
                    <ul className="list-disc pl-4 space-y-3 text-text/75">
                      {conf.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
