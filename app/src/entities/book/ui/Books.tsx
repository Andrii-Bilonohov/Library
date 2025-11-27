import { useBooksQuery } from "@/entities/book/hooks";
import type { BookListItem } from "@/entities/book/types";
import { Pagination } from "@/features/pagination/ui/Pagination.tsx";
import { useBookStore } from "@/entities/book/store/useBookStore.ts";
import { User, Calendar, BookOpen } from "lucide-react";
import { Skeleton } from "../features/ui";
import {useState} from "react";
import {clsx} from "clsx";
import {Link} from "react-router-dom";

export const Books = () => {
    const { page, setPage, limit } = useBookStore();
    const { isLoading, error, data } = useBooksQuery();
    const [selectedBook, setSelectedBook] = useState<string | null>(null);

    if (error)
        return <p className="text-center text-red-500 mt-10">Failed to load books</p>;

    return (
        <>
            {isLoading ? (
                <Skeleton length={limit}/>
            ) : (
                <>

                    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
                        {data && data.books.length > 0 ? (
                            data.books.map((book: BookListItem) => (
                                <Link
                                    key={book.key}
                                    to={`/book/${encodeURIComponent(book.key)}`}
                                >
                                <div
                                        className={clsx("bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 overflow-hidden",
                                            selectedBook === book.key)}
                                        onClick={() => setSelectedBook(selectedBook === book.key ? null : book.key)}
                                    >
                                        {book.cover_i ? (
                                            <img
                                                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                                alt={book.title}
                                                className="w-full h-56 object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-56 bg-gray-200 dark:bg-gray-700 flex flex-col items-center justify-center text-gray-500 text-sm gap-2">
                                                <BookOpen size={32} />
                                                No Cover Available
                                            </div>
                                        )}

                                        <div className="p-4">
                                            <h3 className="font-semibold text-lg mb-2 truncate">{book.title}</h3>

                                            {book.author_name && (
                                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1 flex items-center gap-1 truncate">
                                                    <User size={16} /> {book.author_name.join(", ")}
                                                </p>
                                            )}

                                            {book.first_publish_year && (
                                                <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
                                                    <Calendar size={16} /> {book.first_publish_year}
                                                </p>
                                            )}
                                        </div>

                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-center col-span-full text-gray-500">No books found</p>
                        )}
                    </div>

                    <Pagination
                        currentPage={page}
                        totalPages={data?.totalPages ?? 1}
                        onPageChange={setPage}
                    />
                </>
            )}
        </>
    );
};
