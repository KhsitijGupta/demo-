import { motion } from "framer-motion";
import {
    FaLeaf,
    FaCogs,
    FaUsers,
    FaGavel,
    FaGlobeAsia,
    FaCoins,
} from "react-icons/fa";

const leaves = [
    {
        title: "Social",
        icon: <FaUsers />,
        color: "#22c55e",
        x: -180,
        y: -120,
    },
    {
        title: "Technological",
        icon: <FaCogs />,
        color: "#14b8a6",
        x: 0,
        y: -170,
    },
    {
        title: "Environmental",
        icon: <FaGlobeAsia />,
        color: "#4ade80",
        x: 180,
        y: -120,
    },
    {
        title: "Legal",
        icon: <FaGavel />,
        color: "#84cc16",
        x: 140,
        y: 40,
    },
    {
        title: "Economic",
        icon: <FaCoins />,
        color: "#0ea5e9",
        x: -140,
        y: 40,
    },
    {
        title: "Political",
        icon: <FaLeaf />,
        color: "#2563eb",
        x: -220,
        y: 10,
    },
];

export default function BranchTree() {
    return (
        <section className="py-28 bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800">
                    Strategic Growth Tree
                </h2>
                <p className="text-gray-600 mt-3">
                    One strong trunk supporting multiple growth branches
                </p>
            </div>

            <div className="relative flex justify-center items-center">
                {/* SVG TREE */}
                <svg width="600" height="500" viewBox="0 0 600 500">
                    {/* Trunk */}
                    <motion.path
                        d="M300 420 C290 320 310 260 300 200"
                        stroke="#5c4033"
                        strokeWidth="16"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1 }}
                    />

                    {/* Branches */}
                    {leaves.map((leaf, i) => (
                        <motion.line
                            key={i}
                            x1="300"
                            y1="230"
                            x2={300 + leaf.x * 0.6}
                            y2={230 + leaf.y * 0.6}
                            stroke="#5c4033"
                            strokeWidth="6"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        />
                    ))}
                </svg>

                {/* LEAVES */}
                <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[600px] h-[350px] pointer-events-none">
                    {leaves.map((leaf, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                            className="absolute flex flex-col items-center justify-center text-white font-semibold"
                            style={{
                                left: `calc(50% + ${leaf.x}px)`,
                                top: `calc(50% + ${leaf.y}px)`,
                                width: "110px",
                                height: "140px",
                                background: leaf.color,
                                borderRadius: "60% 60% 60% 60%",
                            }}
                        >
                            <div className="text-3xl mb-2">{leaf.icon}</div>
                            <span className="text-sm">{leaf.title}</span>
                        </motion.div>
                    ))}
                </div>

                {/* ROOT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute bottom-0 bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                >
                    🌳 Core Command / Company
                </motion.div>
            </div>
        </section>
    );
}
