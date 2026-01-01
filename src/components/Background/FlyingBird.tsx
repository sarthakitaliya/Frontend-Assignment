import { motion } from "framer-motion";

interface FlyingBirdProps {
    src: string;
    direction?: "left-to-right" | "right-to-left";
    startY?: string;
    endY?: string;
    duration?: number;
    delay?: number;
}

export default function FlyingBird({
    src,
    direction = "left-to-right",
    startY = "70vh",
    endY = "20vh",
    duration = 3,
    delay = 1.5
}: FlyingBirdProps) {
    const isLeftToRight = direction === "left-to-right";

    return (
        <motion.img
            src={src}
            alt=""
            className="absolute w-[60px] sm:w-[80px] md:w-[100px] pointer-events-none z-10 hidden sm:block"
            initial={{
                x: isLeftToRight ? "-10vw" : "110vw",
                y: startY
            }}
            animate={{
                x: isLeftToRight ? "110vw" : "-10vw",
                y: endY
            }}
            transition={{
                duration,
                ease: [0.25, 0.1, 0.25, 1],
                delay
            }}
        />
    );
}
