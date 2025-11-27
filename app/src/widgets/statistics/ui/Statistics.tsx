import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid
} from "recharts";
import { BarChart3, Users, TrendingUp, BookOpen } from "lucide-react";
import {FloatingParticle} from "@/shared/ui";

export const Statistics = () => {
    const growthData = [
        { year: 2018, authors: 3, books: 8 },
        { year: 2019, authors: 4, books: 11 },
        { year: 2020, authors: 5, books: 15 },
        { year: 2021, authors: 5.5, books: 17 },
        { year: 2022, authors: 5.9, books: 18.5 },
        { year: 2023, authors: 6.1, books: 19.5 },
        { year: 2024, authors: 6.3, books: 20 }
    ];

    const genreData = [
        { genre: "Fiction", value: 8 },
        { genre: "Science", value: 2 },
        { genre: "History", value: 1.5 },
        { genre: "Romance", value: 2 },
        { genre: "Fantasy", value: 1.2 },
        { genre: "Biography", value: 0.8 },
        { genre: "Other", value: 4.5 }
    ];

    return (
        <section className="px-6 py-12 min-h-screen max-w-[1400px] mx-auto">
            <FloatingParticle />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 bg-[#06162E]">

                <div className="p-6 rounded-2xl bg-[#0B2345]/80 border border-cyan-400/20 backdrop-blur-lg shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <BookOpen className="w-10 h-10 text-cyan-300" />
                        <span className="text-green-400 text-sm font-semibold bg-green-400/10 px-3 py-1 rounded-xl">
                            +12.5%
                        </span>
                    </div>
                    <p className="text-4xl font-bold text-white">2.5M</p>
                    <p className="text-cyan-200/70 text-sm mt-1">Daily Reads</p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0B2345]/80 border border-purple-400/20 backdrop-blur-lg shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <Users className="w-10 h-10 text-purple-300" />
                        <span className="text-green-400 text-sm font-semibold bg-green-400/10 px-3 py-1 rounded-xl">
                            +8.3%
                        </span>
                    </div>
                    <p className="text-4xl font-bold text-white">850K</p>
                    <p className="text-purple-200/70 text-sm mt-1">Active Readers</p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0B2345]/80 border border-pink-400/20 backdrop-blur-lg shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <TrendingUp className="w-10 h-10 text-pink-300" />
                        <span className="text-green-400 text-sm font-semibold bg-green-400/10 px-3 py-1 rounded-xl">
                            +5.2%
                        </span>
                    </div>
                    <p className="text-4xl font-bold text-white">23%</p>
                    <p className="text-pink-200/70 text-sm mt-1">Growth Rate</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="p-6 rounded-2xl bg-[#0B2345]/80 border border-blue-400/20 backdrop-blur-lg shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-7 h-7 text-cyan-300" />
                        <h3 className="text-lg font-semibold text-white">Library Growth</h3>
                    </div>

                    <div className="w-full h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={growthData}>
                                <CartesianGrid stroke="rgba(255,255,255,0.05)" />
                                <XAxis dataKey="year" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" />
                                <Tooltip
                                    contentStyle={{ background: "#0B2345", borderRadius: 12, border: "1px solid #1E3A8A" }}
                                    labelStyle={{ color: "#fff" }}
                                />
                                <Line type="monotone" dataKey="books" stroke="#06b6d4" strokeWidth={3} />
                                <Line type="monotone" dataKey="authors" stroke="#a855f7" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#0B2345]/80 border border-purple-400/20 backdrop-blur-lg shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <BarChart3 className="w-7 h-7 text-pink-300" />
                        <h3 className="text-lg font-semibold text-white">Genre Distribution</h3>
                    </div>

                    <div className="w-full h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={genreData}>
                                <CartesianGrid stroke="rgba(255,255,255,0.05)" />
                                <XAxis dataKey="genre" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" />
                                <Tooltip
                                    contentStyle={{ background: "#0B2345", borderRadius: 12, border: "1px solid #1E3A8A" }}
                                    labelStyle={{ color: "#fff" }}
                                />
                                <Bar dataKey="value" fill="#06b6d4" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>

        </section>
    );
};
