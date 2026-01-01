import { motion } from "framer-motion";

interface AnimatedBirdProps {
    src: string;
    className: string;
    delay?: number;
    initial?: { y: number; opacity: number };
    animate?: { y: number; opacity: number };
    duration?: number;
}

export default function AnimatedBird({
    src,
    className,
    delay = 0.3,
    initial = { y: 300, opacity: 0 },
    animate = { y: 0, opacity: 1 },
    duration = 1.5
}: AnimatedBirdProps) {
    return (
        <motion.img
            src={src}
            alt=""
            className={`absolute pointer-events-none ${className}`}
            initial={initial}
            animate={animate}
            transition={{
                duration,
                ease: [0.25, 0.1, 0.25, 1],
                delay,
                opacity: { duration: duration * 0.8, ease: "easeOut" }
            }}
        />
    );
}
