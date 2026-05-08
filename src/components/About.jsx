import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[350px_1fr] gap-12 items-start">
            {/* Left Column - Image and Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:sticky lg:top-24"
            >
              {/* Circular Image */}
              <div className="relative mb-6">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                  <img 
                    src="/Shantanu.png" 
                    alt="Shantanu Pandey - AI/ML Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-4 border-primary/30 scale-110 -z-10"></div>
              </div>

              {/* Name */}
              <h3 className="text-3xl font-bold mb-2 text-heading text-center" style={{ fontFamily: 'cursive' }}>
                Shantanu Pandey
              </h3>
              <p className="text-center text-text/70 italic px-4">
                Building intelligent systems through AI and machine learning.
              </p>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Title */}
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-heading">
                Hi, I'm Shantanu - an AI/ML Engineer
              </h2>

              {/* Description */}
              <div className="space-y-4 text-text/75">
                <p>
                  I'm a developer and AI enthusiast passionate about building technology that blends research with real-world impact. With experience across machine learning, computer vision, data engineering, and full-stack development, I enjoy working on systems end-to-end from collecting and processing raw data to designing, training, and deploying scalable solutions.
                </p>
                <p>
                  Over time, I've worked on projects ranging from facial emotion recognition and forecasting models to financial platforms and real-time signal processing systems. I'm particularly interested in creating efficient, intelligent applications that are not only technically strong but also practical and production-ready.
                </p>
                <p>
                  Alongside development, I enjoy exploring new technologies, optimizing model performance, and solving complex engineering challenges through a research-driven approach.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
