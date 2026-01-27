import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        "Home",
        "About Us",
        "Services",
        "Shop",
        "Portfolio",
        "Blog",
        "Contact",
    ];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <div className="bg-green-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                        🌿
                    </div>
                    <span
                        className={`font-bold text-lg ${scrolled ? "text-gray-800" : "text-white"
                            }`}
                    >
                        Gardening
                    </span>
                </div>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex items-center gap-8">
                    {menuItems.map((item, i) => (
                        <li
                            key={i}
                            className={`cursor-pointer font-medium transition ${scrolled
                                ? "text-gray-700 hover:text-green-600"
                                : "text-white hover:text-green-300"
                                }`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="hidden md:block">
                    <button className="rounded-full bg-green-600 px-5 py-2 text-white hover:bg-green-700 transition">
                        Get a Quote
                    </button>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    onClick={() => setOpen(!open)}
                    className={`md:hidden text-2xl ${scrolled ? "text-gray-800" : "text-white"
                        }`}
                >
                    ☰
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="md:hidden bg-white shadow-lg"
                >
                    <ul className="flex flex-col gap-4 px-6 py-6">
                        {menuItems.map((item, i) => (
                            <li
                                key={i}
                                className="text-gray-700 font-medium hover:text-green-600 cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                        <button className="mt-4 rounded-full bg-green-600 px-5 py-3 text-white hover:bg-green-700 transition">
                            Get a Quote
                        </button>
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
}
