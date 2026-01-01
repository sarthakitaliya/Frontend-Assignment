import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoSvg from "../../assets/icons/logo.svg";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ["How It Works", "Pricing", "Use Case", "FAQ"];

  return (
    <motion.header
      className={`w-full max-w-[1000px] mx-auto px-4 sm:px-5 pt-4 sm:pt-5 relative z-50 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
    >
      <nav className="flex items-center justify-between bg-white/100 backdrop-blur-md rounded-full px-4 sm:px-5 py-3 sm:py-4 pl-4 sm:pl-6 shadow-[0_1px_4px_rgba(12,12,13,0.05)] border border-gray-100">
        <motion.a
          href="/"
          className="flex items-center gap-1.5 sm:gap-2 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <img src={logoSvg} alt="coup. logo" className="h-7 sm:h-9 w-auto" />
          <span className="text-2xl sm:text-3xl font-extrabold text-[#1D2026] tracking-tight">
            coup.
          </span>
        </motion.a>

        <motion.div
          className="hidden lg:flex items-center gap-6 xl:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm xl:text-[16px] font-medium text-[#8C97A8] hover:text-black transition-colors duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.35 + index * 0.05 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#contact"
          className="hidden lg:block group relative overflow-hidden bg-[#007AFF] text-white text-[16px] font-semibold px-6 py-3 rounded-full shadow-[0_1px_4px_rgba(12,12,13,0.05)] hover:shadow-[0_4px_16px_rgba(255,180,130,0.42),0_2px_6px_rgba(255,160,100,0.3)] transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-xl"></span>
          <span className="relative z-10 group-hover:text-[#007AFF] transition-colors duration-300">
            Contact Sales
          </span>
        </motion.a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-[#1D2026] rounded-full"
            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-[#1D2026] rounded-full"
            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-[#1D2026] rounded-full"
            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute left-4 right-4 top-full mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-base font-medium text-[#8C97A8] hover:text-black transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-50 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 text-center bg-[#007AFF] text-white text-base font-semibold px-6 py-3 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
