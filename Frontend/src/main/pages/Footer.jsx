import { motion } from "framer-motion";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaLeaf,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative bg-green-800 text-white overflow-hidden">

            {/* TOP WAVE */}
            <svg
                className="absolute top-0 left-0 w-full"
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
            >
                <path
                    fill="#f0fdf4"
                    d="M0,64 C240,96 480,32 720,32 960,32 1200,96 1440,64 L1440,0 L0,0 Z"
                />
            </svg>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 grid md:grid-cols-4 gap-10">

                {/* BRAND */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white text-green-700 w-10 h-10 rounded-full flex items-center justify-center">
                            <FaLeaf />
                        </div>
                        <h3 className="text-xl font-bold">Gardening</h3>
                    </div>
                    <p className="text-green-100 text-sm leading-relaxed">
                        Growing sustainable, planet-friendly solutions with nature-inspired
                        design and innovation.
                    </p>
                </motion.div>

                {/* QUICK LINKS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-green-100">
                        {["Home", "About Us", "Services", "Portfolio", "Blog"].map(
                            (link, i) => (
                                <li
                                    key={i}
                                    className="hover:text-white transition cursor-pointer"
                                >
                                    {link}
                                </li>
                            )
                        )}
                    </ul>
                </motion.div>

                {/* SERVICES */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h4 className="font-semibold mb-4">Our Services</h4>
                    <ul className="space-y-3 text-sm text-green-100">
                        {[
                            "Garden Design",
                            "Lawn Maintenance",
                            "Irrigation System",
                            "Plant Nursery",
                            "Rooftop Gardening",
                        ].map((service, i) => (
                            <li
                                key={i}
                                className="hover:text-white transition cursor-pointer"
                            >
                                {service}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* SOCIAL */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h4 className="font-semibold mb-4">Connect With Us</h4>
                    <div className="flex gap-4">
                        {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                            (Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 hover:bg-white hover:text-green-700 transition"
                                >
                                    <Icon />
                                </a>
                            )
                        )}
                    </div>
                </motion.div>
            </div>

            {/* COPYRIGHT */}
            <div className="border-t border-green-700 text-center py-6 text-sm text-green-100">
                © {new Date().getFullYear()} Gardening. All Rights Reserved.
            </div>
        </footer>
    );
}
