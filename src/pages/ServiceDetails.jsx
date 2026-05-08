import { motion } from 'framer-motion'
import { FaCheck, FaClock, FaUserCheck, FaPhone, FaChartBar, FaBriefcase, FaChartLine } from 'react-icons/fa'

const ServiceDetails = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-center">
          <ol className="flex justify-center items-center space-x-2 text-sm">
            <li><a href="/" className="text-text/70 hover:text-primary">Home</a></li>
            <li className="text-text/50">/</li>
            <li className="text-primary">Service Details</li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Service Details</h1>
          <p className="text-text/70 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <img src="/services-1.webp" alt="Service" className="w-full rounded-xl mb-8" />

              <h3 className="text-3xl font-bold mb-4">Digital Marketing Solutions</h3>
              <p className="text-text/75 mb-4">
                Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka. Aut quiatem. Ut earum tempore quidem qui recusandae distinctio quo.
              </p>
              <p className="text-text/75 mb-8">
                Et officiis id est ad voluptates sint quia architecto aut soluta eum voluptatum rerum illo mara. Ut earum tempore quidem qui recusandae distinctio quo. Veniam maiores eos cumque distinctio.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  'Search Engine Optimization',
                  'Social Media Marketing',
                  'Content Marketing Strategy',
                  'Email Marketing Campaigns'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <FaCheck className="text-primary text-xl flex-shrink-0" />
                    <h4 className="font-semibold">{feature}</h4>
                  </motion.div>
                ))}
              </div>

              <p className="text-text/75">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Service Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h4 className="text-xl font-bold mb-6">Service Information</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FaClock className="text-primary text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-1">Project Duration</h5>
                    <p className="text-text/70">3-6 months</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaUserCheck className="text-primary text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-1">Project Manager</h5>
                    <p className="text-text/70">Sarah Johnson</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaPhone className="text-primary text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-1">Contact Support</h5>
                    <p className="text-text/70">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Services */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h4 className="text-xl font-bold mb-6">Related Services</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FaChartBar className="text-primary text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-1 hover:text-primary transition-colors cursor-pointer">
                      <a href="#">Business Analytics</a>
                    </h5>
                    <p className="text-sm text-text/70">Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaBriefcase className="text-primary text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-1 hover:text-primary transition-colors cursor-pointer">
                      <a href="#">Business Consulting</a>
                    </h5>
                    <p className="text-sm text-text/70">Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaChartLine className="text-primary text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-1 hover:text-primary transition-colors cursor-pointer">
                      <a href="#">Financial Planning</a>
                    </h5>
                    <p className="text-sm text-text/70">Sed perspiciatis omnis iste natus error sit voluptatem doloremque</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
