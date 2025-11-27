import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { ROUTE_ENUM } from "@/shared/config";

export const NavBar = () => {
    return (
        <div className="sticky top-0 z-50 bg-[#02142B]/90 backdrop-blur-xl border-b border-cyan-700/20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 select-none">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 150 }}
                            className="relative"
                        >
                            <BookOpenIcon className="w-8 h-8 text-cyan-400 drop-shadow-lg" />
                            <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-30 blur-xl" />
                        </motion.div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              LIBRARY
            </span>
                    </Link>

                    <div className="flex items-center gap-8">
                        <Link
                            to={ROUTE_ENUM.catalog}
                            className="relative text-base font-semibold text-cyan-100/70 hover:text-white transition"
                        >
                            Catalog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
