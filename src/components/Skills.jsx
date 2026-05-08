import { motion } from 'framer-motion'

const SkillCard = ({ title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300"
    > 
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-sm text-text/60 leading-relaxed">{description}</p>
    </motion.div>
  )
}

const Skills = () => {
  const skills = [
    { title: 'Deep Learning', description: 'TensorFlow, PyTorch, CNNs, Transfer Learning, and Ensemble Methods for computer vision.' },
    { title: 'Data Science', description: 'Pandas, NumPy, Statistical Modelling, ETL Pipelines, and data preprocessing automation.' },
    { title: 'Computer Vision', description: 'OpenCV, facial recognition, emotion detection, and real-time image processing systems.' },
    { title: 'Full-Stack Dev', description: 'Django, REST APIs, PostgreSQL, MySQL for building production-ready applications.' },
  ]

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              description={skill.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
