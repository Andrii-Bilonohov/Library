import { Link } from "react-router";
import { Ghost } from "lucide-react";

export const PageNotFound = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-center px-6 overflow-hidden">

            <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl" />

            <Ghost className="w-24 h-24 text-blue-400 mb-6 animate-bounce drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />

            <h1 className="relative text-7xl font-extrabold text-blue-500 tracking-tight mb-4">
                404
            </h1>

            <h2 className="text-3xl font-semibold text-white mb-2">
                Page Not Found
            </h2>

            <p className="text-gray-400 max-w-md mb-8">
                The page you are looking for doesn't exist or might have been moved elsewhere.
            </p>

            <Link
                to="/"
                className="relative px-8 py-4 rounded-2xl text-lg font-medium text-white
                           backdrop-blur-md bg-white/10 border border-white/20 shadow-lg
                           hover:bg-white/20 hover:shadow-blue-500/20 transition-all duration-300"
            >
                Back to Home
            </Link>

        </div>
    );
};
