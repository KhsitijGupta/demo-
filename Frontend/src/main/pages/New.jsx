import { motion } from "framer-motion";
import Navbar from "./Navbar";
import BranchTree from "./BranshTree";
import img from '../../../public/tre.jpg'
import Logosec from "./logosec";
import Footer from "./Footer";

export default function LandingPage() {
    return (
        <div className="font-sans text-gray-800 ">
            <Navbar />



            {/* ================= HERO ================= */}
            <section
                className="relative h-[40rem] bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1461354464878-ad92f492a5a0')",
                }}
            >
                <div className="absolute inset-0 bg-black/50" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6"
                >
                    <span className="uppercase tracking-widest text-sm text-green-300">
                        Beautiful Gardening
                    </span>

                    <h1 className="mt-4 text-4xl md:text-6xl font-bold">
                        Planet-Friendly <br /> Gardening
                    </h1>

                    <div className="mt-8 flex gap-4">
                        <button className="rounded-full bg-green-600 px-6 py-3 hover:bg-green-700 transition">
                            Explore More
                        </button>
                        <button className="rounded-full border border-white px-6 py-3 hover:bg-white hover:text-black transition">
                            How It Works
                        </button>
                    </div>
                </motion.div>
            </section>

            <Logosec />
            {/* <BranchTree /> */}
            <div className="flex justify-center my-10">

                <img src={img} className="items-center " />
            </div>

            {/* ================= ABOUT ================= */}
            <section className="py-20 px-6  max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-green-600 font-semibold">
                        About Gardening
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3">
                        We'll Help You To Create Your Dream Garden
                    </h2>

                    <p className="mt-5 text-gray-600">
                        Backed by decades of hands-on experience, our skilled team delivers
                        personalized landscaping solutions combining beauty and sustainability.
                    </p>

                    <ul className="mt-6 space-y-3">
                        {[
                            "House Landscape",
                            "Lawn Mowing & Cleaning",
                            "Green House Nursery",
                            "Rooftop Gardening",
                            "Indoor Plantation",
                            "Vegetable Gardening",
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <span className="text-green-600">✔</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <button className="mt-6 rounded-full bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition">
                        Contact Us
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 gap-4"
                >
                    <img
                        className="rounded-3xl"
                        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                        alt=""
                    />
                    <img
                        className="rounded-3xl mt-10"
                        src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b"
                        alt=""
                    />
                </motion.div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="py-20  bg-gray-100 px-6 md:px-16">
                <div className="text-center mb-12">
                    <span className="text-green-600 font-semibold">
                        Services of Gardening
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3">
                        The Best Choice For Your Business
                    </h2>
                </div>

                <div className="grid md:grid-cols-4  max-w-7xl mx-auto gap-6">
                    {[
                        "Lawn Maintenance",
                        "Watering & Irrigation",
                        "Yard & Garden Decor",
                        "Plant Stands & Trays",
                    ].map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
                        >
                            <div className="text-green-600 text-3xl mb-4">🌱</div>
                            <h3 className="font-bold text-lg">{service}</h3>
                            <p className="mt-3 text-gray-600 text-sm">
                                Lorem ipsum is simply dummy text of the printing industry.
                            </p>
                            <button className="mt-4 text-green-600 font-semibold">
                                Read More →
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ================= FEATURES ================= */}
            <section className="py-20 px-6  max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-green-600 font-semibold">
                        Care Features
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3">
                        We Want To Help You To Grow Plant
                    </h2>

                    <p className="mt-5 text-gray-600">
                        We tailor every service to fit your unique needs and budget while
                        delivering exceptional gardening care.
                    </p>

                    <ul className="mt-6 space-y-3">
                        <li>✔ We're Experienced Gardening</li>
                        <li>✔ We Adapt Your Needs</li>
                        <li>✔ Gardening That Grows With You</li>
                        <li>✔ Shaping Spaces Around You</li>
                    </ul>

                    <button className="mt-6 rounded-full bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition">
                        Start a Project
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative bg-green-200"
                >
                    <img
                        className="rounded-3xl"
                        src="https://images.unsplash.com/photo-1599685315640-9ceab2a9dc47"
                        alt=""
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className=" p-4 rounded-full text-black text-2xl">
                            ▶
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />

        </div>
    );
}
