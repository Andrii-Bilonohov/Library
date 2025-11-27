import { useBookStore } from "@/entities/book/store/useBookStore";

export const useSearch = () => {
    const { query, setQuery, setSubmittedQuery} = useBookStore();

    const onSearchSubmit = () => {
        setSubmittedQuery(query);
    };

    const onSearchChange = (value: string) => {
        setQuery(value);
    };

    return {
        query,
        onSearchChange,
        onSearchSubmit,
    };
};
