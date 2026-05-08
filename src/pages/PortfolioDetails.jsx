import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const PortfolioDetails = () => {
  const { id } = useParams()

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-center">
          <ol className="flex justify-center items-center space-x-2 text-sm">
            <li><a href="/" className="text-text/70 hover:text-primary">Home</a></li>
            <li className="text-text/50">/</li>
            <li><a href="/#portfolio" className="text-text/70 hover:text-primary">Portfolio</a></li>
            <li className="text-text/50">/</li>
            <li className="text-primary">Portfolio Details</li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Portfolio Details</h1>
          <p className="text-text/70 max-w-2xl mx-auto">
           Small, deliberate set of projects spanning fintech, entertainment and utility — each one shipped, researched and refined..
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <img src="/portfolio-1.webp" alt="Portfolio" className="w-full rounded-lg" />
            <img src="/portfolio-10.webp" alt="Portfolio" className="w-full rounded-lg" />
            <img src="/portfolio-7.webp" alt="Portfolio" className="w-full rounded-lg" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">This is an example of portfolio details</h2>
              <p className="text-text/75 mb-4">
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim.
              </p>
              <p className="text-text/75 mb-6">
                Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="italic text-text/75 mb-4">
                  "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
                </p>
                <div className="flex items-center gap-4">
                  <img src="/person-f-5.webp" alt="Sara Wilsson" className="w-16 h-16 rounded-full" />
                  <div>
                    <h3 className="font-semibold">Sara Wilsson</h3>
                    <p className="text-sm text-text/60">Designer</p>
                  </div>
                </div>
              </div>

              <p className="text-text/75">
                Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Project information</h3>
              <ul className="space-y-3">
                <li><strong>Category:</strong> Web design</li>
                <li><strong>Client:</strong> ASU Company</li>
                <li><strong>Project date:</strong> 01 March, 2020</li>
                <li><strong>Project URL:</strong> <a href="#" className="text-primary hover:underline">www.example.com</a></li>
                <li>
                  <a href="#" className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/85 transition-all">
                    Visit Website
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioDetails
