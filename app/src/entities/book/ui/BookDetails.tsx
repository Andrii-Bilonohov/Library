import {useAuthorsQuery, useBookQuery} from "@/entities/book/hooks";
import { useParams, Link } from "react-router-dom";
import {
    ArrowLeft,
    BookOpen,
    User,
    FileText,
    Tags,
} from "lucide-react";
import {Skeleton2} from "@/entities/book/features/ui";
import type {Author} from "@/entities/book/types";

export const BookDetails = () => {
    const { key } = useParams<{ key: string }>();
    const decodedKey = decodeURIComponent(key!);
    const { isLoading, data: book } = useBookQuery(decodedKey);


    const authorsKeys = book?.authors?.map(a => a.author.key) || [];
    const { data: authorsData = [], isLoading: authorsLoading } = useAuthorsQuery(authorsKeys);


    const description =
        typeof book?.description === "string"
            ? book.description
            : book?.description?.value;

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-10 text-gray-100">
            <Link
                to="/catalog"
                className="inline-flex items-center gap-2 mb-6 transition text-cyan-300 hover:text-cyan-200 focus:text-cyan-400 focus:underline"
            >
                <ArrowLeft size={20} />
                Back to Catalog
            </Link>
            {isLoading ? (
                <Skeleton2 />
            ) : !book ? (
                <div className="max-w-5xl mx-auto mt-20 text-gray-400 text-center text-xl">
                    Book not found
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

                        <div className="md:col-span-2 flex justify-center">
                            {book.covers?.[0] ? (
                                <div className="relative w-full max-w-md aspect-[3/4]">
                                    <img
                                        src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
                                        alt={book.title}
                                        className="absolute inset-0 w-full h-full rounded-2xl shadow-xl border border-cyan-700/40 bg-gray-900/40 object-cover transition-transform hover:scale-105"
                                    />
                                </div>
                            ) : (
                                <div className="w-full max-w-md aspect-[3/4] rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-500">
                                    <BookOpen size={40} />
                                    <span className="ml-2">No Cover</span>
                                </div>
                            )}
                        </div>

                        <div className="md:col-span-3 space-y-6">
                            <h1 className="text-3xl md:text-4xl font-bold text-cyan-300">
                                {book.title}
                            </h1>

                            {book.subtitle && (
                                <p className="text-lg text-gray-300">{book.subtitle}</p>
                            )}

                            <div className="bg-gray-900/40 border border-gray-700 rounded-xl p-5 shadow-md">
                                <h2 className="text-xl font-semibold text-cyan-300 mb-1 flex items-center gap-2">
                                    <FileText size={20} /> Description
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    {description || "No description available."}
                                </p>
                            </div>

                            {authorsLoading ? (
                                <div className="text-gray-400 flex items-center gap-2">
                                    <User size={18} /> Loading authors...
                                </div>
                            ) : (
                                authorsData.length > 0 && (
                                    <div className="flex gap-2 text-gray-300">
                                        <User size={18} className="text-cyan-300" />
                                        <span className="font-semibold">Authors:</span>
                                        <span className="text-gray-200">
                                            {authorsData
                                                .filter((a): a is Author => !!a)
                                                .map(a => a.name)
                                                .join(", ")}
                                                </span>
                                    </div>
                                )
                            )}

                            {book.subjects && (
                                <div className="mt-10">
                                    <h2 className="text-2xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                                        <Tags size={22} /> Subjects
                                    </h2>
                                    <div className="flex flex-wrap gap-3">
                                        {book.subjects.map((sub) => (
                                            <span
                                                key={sub}
                                                className="px-3 py-1 bg-gray-800 border border-cyan-700/40 rounded-full text-sm text-cyan-200"
                                            >
                                                {sub}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
