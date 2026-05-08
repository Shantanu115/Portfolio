import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

const RECIPIENT_EMAIL = 'Shantanu.pandey47@gmail.com'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    const mailto = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-heading to-primary bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="w-48 h-5 mx-auto mb-4">
            <svg viewBox="0 0 200 20" className="w-full h-full text-primary opacity-50">
              <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <p className="text-text/75 max-w-2xl mx-auto">
            Get in touch with me for any inquiries or collaboration opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                <FaMapMarkerAlt size={18} />
              </div>
              <h3 className="text-lg font-semibold mb-1">Address</h3>
              <p className="text-text/70 text-sm">Delhi, India</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                <FaEnvelope size={18} />
              </div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-text/70 text-sm break-all">Shantanu.pandey47@gmail.com</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                <FaPhone size={18} />
              </div>
              <h3 className="text-lg font-semibold mb-1">Call</h3>
              <p className="text-text/70 text-sm">+91 7303343882</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-md h-full">
              {sent && (
                <div className="mb-6 px-4 py-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
                  Your email client has opened with the message pre-filled. Please send it to complete your inquiry.
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors mb-6"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors mb-6 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/85 transition-all hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
