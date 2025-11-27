export const Footer = () => {
    return (
        <footer className="relative bg-[#02142B] py-14 overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,200,255,0.15),transparent_70%)] opacity-80" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div className="space-y-4">
                        <a href="/" className="block w-fit">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent hover:opacity-90 transition">
                                LIBRARY
                            </h2>
                        </a>

                        <p className="text-cyan-100/70 text-sm max-w-sm leading-relaxed">
                            A calm and modern place for discovering books.
                            Read. Learn. Explore.
                        </p>
                    </div>

                    <div className="md:text-right space-y-4">

                        <a
                            href="/catalog"
                            className="inline-block px-6 py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-100 backdrop-blur-md border border-cyan-400/20 transition"
                        >
                            Browse Catalog
                        </a>

                        <div className="text-cyan-100/60 text-sm tracking-wide">
                            © {new Date().getFullYear()} Library Platform. All rights reserved.
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};
