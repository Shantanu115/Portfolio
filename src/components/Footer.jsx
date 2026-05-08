import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <p className="text-sm text-text">
            © <span>Copyright</span> <strong className="px-1">Shantanu Pandey's Portfolio</strong> <span>All Rights Reserved</span>
          </p>
        </div>
        
        <div className="flex justify-center space-x-5 mb-5">
          <a href="https://github.com/Shantanu115" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-text/50 flex items-center justify-center text-text/50 hover:text-primary hover:border-primary transition-colors">
            <FaGithub size={16} />
          </a>
          <a href="https://www.linkedin.com/in/shantanu-pandey" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-text/50 flex items-center justify-center text-text/50 hover:text-primary hover:border-primary transition-colors">
            <FaLinkedin size={16} />
          </a>
        </div>

        <div className="text-center text-xs text-text/70">
          Designed and Developed by Shantanu Pandey
        </div>
      </div>
    </footer>
  )
}

export default Footer
