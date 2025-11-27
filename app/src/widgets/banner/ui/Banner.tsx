import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTE_ENUM } from "@/shared/config";
import img from "@/shared/assets/images/book.png";
import { FloatingParticle } from "@/shared/ui/FloatingParticle.tsx";

export const Banner = () => {
    return (
        <div className="relative min-h-screen bg-[#02142B] overflow-hidden">

            <FloatingParticle />

            <div className="max-w-[1300px] mx-auto px-4 h-screen flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

                    <div className="flex flex-col justify-center space-y-8">

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text"
                        >
                            Interactive Library
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-cyan-100/80 max-w-xl"
                        >
                            Explore our collection with dynamic previews and immersive interaction.
                        </motion.p>

                        <div className="flex items-center gap-4 mt-2">

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to={ROUTE_ENUM.catalog}
                                    className="flex items-center gap-2 bg-[#0CEBFF] text-black px-7 py-3 rounded-xl font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition"
                                >
                                    <span className="text-xl">🔍</span>
                                    Start Exploring
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to={ROUTE_ENUM.catalog}
                                    className="flex items-center gap-2 bg-white/10 border border-white/20 text-cyan-100 px-7 py-3 rounded-xl backdrop-blur-lg hover:bg-white/20 transition"
                                >
                                    <span className="text-xl">⭐</span>
                                    Featured Books
                                </Link>
                            </motion.div>

                        </div>

                        <div className="flex items-center gap-16 mt-10">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-white">20M+</p>
                                <p className="text-cyan-200/70 text-sm">Books</p>
                            </div>

                            <div className="text-center">
                                <p className="text-3xl font-bold text-white">6M+</p>
                                <p className="text-cyan-200/70 text-sm">Authors</p>
                            </div>

                            <div className="text-center">
                                <p className="text-3xl font-bold text-white">100+</p>
                                <p className="text-cyan-200/70 text-sm">Languages</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <motion.img
                            src={img}
                            alt="book"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-[90%] md:w-[110%] lg:w-[130%] drop-shadow-[0_0_40px_rgba(0,200,255,0.4)]"
                        />

                        <motion.div
                            animate={{ y: [0, -18, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute inset-0"
                        ></motion.div>
                    </div>

                </div>
            </div>

        </div>
    );
};
