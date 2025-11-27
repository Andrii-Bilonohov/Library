import { useQuery } from "@tanstack/react-query";
import { BookService } from "@/shared/api/services/bookService";
import { useBookStore } from "@/entities/book/store";
import { useFilterStore } from "@/features/filter/store/useFilterStore";
import type {BookDetails} from "@/entities/book/types";
import type {Author} from "@/entities/book/types/book.ts";

export const useBooksQuery = () => {
    const { page, limit, submittedQuery } = useBookStore();
    const { languages, subjects } = useFilterStore();

    const defaultQuery = "subject:popular";

    const searchQuery = submittedQuery?.length >= 1
        ? `title:${submittedQuery}`
        : defaultQuery;


    const selectedLanguages = Object.entries(languages)
        .filter(([_, isSelected]) => isSelected)
        .map(([lang]) => lang);

    const selectedSubjects = Object.entries(subjects)
        .filter(([_, isSelected]) => isSelected)
        .map(([subj]) => subj);

    return useQuery({
        queryKey: [
            "books",
            searchQuery,
            page,
            selectedLanguages.join(","),
            selectedSubjects.join(",")
        ],
        queryFn: async () => {
            const { books, totalCount } = await BookService.searchBooks({
                q: searchQuery,
                page,
                limit,
                languages: selectedLanguages,
                subjects: selectedSubjects
            });

            return {
                books,
                totalPages: Math.ceil(totalCount / limit),
                totalCount
            };
        }
    });
};

export const useBookQuery = (key: string) => {
    return useQuery({
        queryKey: ["book", key],
        queryFn: async () => {
            return BookService.getBook(key)
                .then((result) => result.data as BookDetails)
        },
        enabled: !!key,
    })
}

export const useAuthorsQuery = (authorKeys?: string[]) => {
    return useQuery<Author[]>({
        queryKey: ["authors", authorKeys],
        queryFn: () =>
            Promise.all(
                (authorKeys || []).map(k =>
                    BookService.getAuthors(k).then(r => r.data as Author)
                )
            ),
        enabled: !!authorKeys?.length,
    });
};

