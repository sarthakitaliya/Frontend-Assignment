import { motion } from "framer-motion";
import cloudsSvg from "../../assets/graphics/clouds.svg";
import birdSmall1 from "../../assets/graphics/bird-small-1.svg";
import birdSmall2 from "../../assets/graphics/bird-small-2.svg";
import birdMedium1 from "../../assets/graphics/bird-medium-1.svg";
import birdMedium2 from "../../assets/graphics/bird-medium-2.svg";
import birdLarge1 from "../../assets/graphics/bird-large-1.svg";
import birdLarge2 from "../../assets/graphics/bird-large-2.svg";
import birdFlying from "../../assets/graphics/bird-flying.svg";
import birdFlyingLeft from "../../assets/graphics/bird-flying-left.svg";
import AnimatedBird from "./AnimatedBird";
import FlyingBird from "./FlyingBird";

interface BackgroundProps {
    className?: string;
}

export default function Background({ className = '' }: BackgroundProps) {
    return (
        <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
            <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, #FFFFFF 0%, #E8F4FF 40%, #D4EBFF 100%)' }}
            />

            <motion.img
                src={cloudsSvg}
                alt=""
                className="absolute -bottom-4 left-0 w-full h-auto"
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            />

            <FlyingBird src={birdFlying} direction="left-to-right" endY="20vh" />
            <FlyingBird src={birdFlyingLeft} direction="right-to-left" endY="40vh" />

            <AnimatedBird
                src={birdSmall1}
                className="w-[30px] sm:w-[36px] md:w-[42px] top-[20%] left-[3%] sm:top-[38%] sm:left-[22%]"
                delay={0.4}
                initial={{ y: 200, opacity: 0.4 }}
                animate={{ y: 0, opacity: 0 }}
            />
            <AnimatedBird
                src={birdSmall1}
                className="w-[30px] sm:w-[36px] md:w-[42px] top-[15%] left-[8%] sm:top-[32%] sm:left-[12%]"
                delay={0.4}
                initial={{ y: 200, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
            />
            <img src={birdSmall2} alt="" className="w-[30px] sm:w-[36px] md:w-[42px] absolute pointer-events-none top-[20%] left-[3%] sm:top-[38%] sm:left-[22%]" />
            <AnimatedBird
                src={birdSmall2}
                className="w-[30px] sm:w-[36px] md:w-[42px] top-[18%] right-[3%] sm:top-[34%] sm:right-[20%]"
                delay={0.5}
                initial={{ y: 100, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
            />
            <AnimatedBird
                src={birdSmall2}
                className="w-[30px] sm:w-[36px] md:w-[42px] top-[25%] right-[8%] sm:top-[50%] sm:right-[16%] -opacity-50"
                delay={0.4}
                initial={{ y: 200, opacity: 0.4 }}
                animate={{ y: 0, opacity: 0 }}
            />
            <img src={birdSmall2} alt="" className="w-[30px] sm:w-[36px] md:w-[42px] absolute top-[25%] right-[8%] sm:top-[50%] sm:right-[16%]" />

            <AnimatedBird
                src={birdMedium1}
                className="hidden sm:block w-14 sm:w-16 md:w-20 bottom-[12%] left-[35%]"
                delay={0.6}
            />
            <AnimatedBird
                src={birdMedium2}
                className="hidden sm:block w-16 sm:w-20 md:w-[103px] bottom-[4%] left-[18%]"
                delay={0.7}
            />

            <AnimatedBird
                src={birdLarge1}
                className="hidden sm:block w-20 sm:w-24 md:w-28 bottom-[3%] right-[27%]"
                delay={0.5}
            />
            <AnimatedBird
                src={birdLarge2}
                className="hidden sm:block w-20 sm:w-24 md:w-28 bottom-[6%] right-[10%]"
                delay={0.8}
            />
        </div>
    );
}
