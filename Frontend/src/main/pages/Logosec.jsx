import { motion } from "framer-motion";
import { useState } from "react";

const logos = [
    "/aq.jpeg",
    "/aq.jpeg",
    "/aq.jpeg",
    "/aq.jpeg",
    "/aq.jpeg",
];

const allLogos = [...logos, ...logos];

export default function Logosec() {
    const [pause, setPause] = useState(false);

    return (
        <section className="relative py-18 bg-gradient-to-r from-green-300 to-white overflow-hidden">

            {/* TOP WAVE */}
            <svg
                className="absolute top-0 left-0 w-full"
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
            >
                <path
                    fill="#ffffff"
                    d="M0,64 C240,96 480,32 720,32 960,32 1200,96 1440,64 L1440,0 L0,0 Z"
                />
            </svg>

            {/* CONTENT */}
            <div className="relative z-10">
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Trusted Growth Partners
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Flowing together towards sustainability
                    </p>
                </div>

                {/* SLIDER */}
                <div
                    className="relative overflow-hidden"
                    onMouseEnter={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                >
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent " />
                    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-20" />

                    <motion.div
                        className="flex gap-20 items-center"
                        animate={{ x: pause ? undefined : ["0%", "-50%"] }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {allLogos.map((logo, i) => (
                            <div
                                key={i}
                                className="min-w-[180px] mb-12 flex items-center justify-center"
                            >
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="h-16 rounded-2xl object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* BOTTOM WAVE */}
            <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
            >
                <path
                    fill="#ffffff"
                    d="M0,32 C240,0 480,64 720,64 960,64 1200,0 1440,32 L1440,120 L0,120 Z"
                />
            </svg>
        </section>
    );
}
