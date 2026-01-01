import { motion } from "framer-motion";
import messageBadge from "../../assets/icons/message-badge.svg";
import appleLogo from "../../assets/icons/apple-logo.svg";
import scrollIndicator from "../../assets/icons/scroll-indicator.svg";

interface HeroProps {
    className?: string;
}

export default function Hero({ className = '' }: HeroProps) {
    return (
        <section
            className={`flex flex-col items-center justify-center text-center px-4 sm:px-6 pb-10 sm:pb-16 mt-36 sm:mt-16 ${className}`}
        >
            <motion.div
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5 shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
                <img src={messageBadge} alt="" className="h-3 sm:h-4 w-auto" />
                <span className="text-xs sm:text-sm font-medium text-primary">
                    #1 iMessage Automation Tool
                </span>
            </motion.div>

            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-dark leading-[1.15] sm:leading-tight max-w-4xl mb-4 sm:mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
                <span className="text-primary">iMessage</span> Automation
                <br />
                for Teams and AI
                <br />
                Workflows.
            </motion.h1>

            <motion.p
                className="text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl mb-6 sm:mb-8 leading-relaxed text-[#6B7280]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            >
                Coup lets you, your team, or AI workflows send iMessages directly from
                your phone number, running securely on your Mac or Mac Mini.
            </motion.p>

            <motion.div
                className="flex flex-row items-center justify-center gap-3 sm:gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            >
                <a
                    href="#get-started"
                    className="bg-primary hover:bg-primary-dark text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 whitespace-nowrap"
                >
                    Get Started
                </a>
                <a
                    href="#download"
                    className="inline-flex items-center gap-2 sm:gap-3 bg-white hover:bg-gray-50 sm:bg-transparent text-[#1D2026] text-sm sm:text-[16px] font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border shadow-[0_1px_4px_rgba(12,12,13,0.05)] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                >
                    <img src={appleLogo} alt="" className="w-4 h-5 sm:w-[19px] sm:h-[22px]" />
                    <div className="w-px h-4 sm:h-5 bg-black hidden sm:block"></div>
                    <span className="hidden sm:inline">Download the Mac app</span>
                    <span className="sm:hidden">Download</span>
                </a>
            </motion.div>

            <motion.img
                src={scrollIndicator}
                alt="Scroll to learn more"
                className="hidden sm:block mt-36 sm:mt-44 w-auto h-12 sm:h-14 animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            />
        </section>
    );
}
