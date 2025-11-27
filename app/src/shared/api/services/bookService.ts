import { instance } from "@/shared/api";
import { ENDPOINTS_URL } from "@/shared/config/api.config";

type SearchParams = {
    q: string;
    page: number;
    limit: number;
    languages?: string[];
    subjects?: string[];
};

export const BookService = {
    searchBooks: async ({ q, page, limit, languages = [], subjects = [] }: SearchParams) => {
        const combos: { lang?: string; subj?: string }[] = [];

        if (languages.length > 0 && subjects.length > 0) {
            for (const lang of languages) {
                for (const subj of subjects) combos.push({ lang, subj });
            }
        } else if (languages.length > 0) {
            for (const lang of languages) combos.push({ lang });
        } else if (subjects.length > 0) {
            for (const subj of subjects) combos.push({ subj });
        } else {
            combos.push({});
        }

        const requests = combos.map(({ lang, subj }) => {
            const queryParts = [q];
            if (lang) queryParts.push(`language:${lang}`);
            if (subj) queryParts.push(`subject:${subj}`);
            const finalQuery = queryParts.join("+");

            const offset = (page - 1) * limit;

            const url = ENDPOINTS_URL.getBooks(finalQuery, page, limit, offset);
            return instance.get(url).then(res => ({
                books: res.data.docs,
                total: res.data.numFound
            }));
        });

        const results = await Promise.all(requests);

        const mergedBooks = Array.from(
            new Map(
                results.flatMap(r => r.books).map(book => [book.key || `${book.title}-${book.author_name?.[0]}`, book])
            ).values()
        );

        const totalCount = results.reduce((acc, r) => acc + r.total, 0);

        return { books: mergedBooks, totalCount };
    },
    getBook: async (key: string) =>
        instance ({
            method: "GET",
            url: ENDPOINTS_URL.getBook(key),
        }),
    getAuthors: async (key: string) =>
        instance ({
            method: "GET",
            url: ENDPOINTS_URL.getAuthor(key),
        })
};
