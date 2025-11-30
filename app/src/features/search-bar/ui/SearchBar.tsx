import { type FormEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSearch } from "@/features/search-bar/hooks";

export const SearchBar = () => {
    const { query, onSearchChange, onSearchSubmit } = useSearch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearchSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

                <div className="flex-1 relative rounded-xl transition-shadow duration-500
                                hover:shadow-[0_0_15px_2px_rgba(0,255,255,0.3)]
                                hover:bg-gray-900/70">
                    <MagnifyingGlassIcon
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400"
                    />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Discover your next read..."
                        className="w-full py-3 md:py-4 pl-10 pr-4 rounded-xl bg-gray-900/60 border border-gray-700/50
                                   text-gray-100 placeholder-gray-400
                                   focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400
                                   backdrop-blur-xl transition-all duration-300"
                    />
                </div>

                <button
                    type="submit"
                    className="px-6 py-3 md:px-7 md:py-4 rounded-xl bg-gray-800 text-white font-semibold
                               transition-transform duration-300
                               hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50
                               hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500
                               active:scale-95"
                >
                    Search
                </button>
            </div>
        </form>
    );
};
