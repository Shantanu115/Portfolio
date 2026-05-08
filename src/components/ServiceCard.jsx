import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white flex flex-col"
    >
      {/* Card Header */}
      <div className="bg-heading px-6 py-5 flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white text-2xl">
          {service.icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-white font-bold text-lg leading-tight truncate">{service.title}</h3>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="inline-block bg-primary/20 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">
              {service.category}
            </span>
            {service.badge && (
              <span className="inline-block bg-white/10 text-white/70 text-xs px-2 py-0.5 rounded-full">
                {service.badge}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-text/70 leading-relaxed mb-5 text-sm">{service.description}</p>

        {service.features && service.features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {service.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-text/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link
            to={`/service/${service.id}`}
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            View Details <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard
