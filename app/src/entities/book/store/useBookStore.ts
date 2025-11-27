import {create} from "zustand/react";

interface BookStoreState {
    query: string;
    submittedQuery: string;
    page: number;
    limit: number;

    setQuery: (q: string) => void;
    setSubmittedQuery: (q: string) => void;
    setPage: (p: number) => void;
}

export const useBookStore = create<BookStoreState>((set) => ({
    query: "",
    submittedQuery: "",
    page: 1,
    limit: 50,

    setQuery: (q) => set({ query: q }),
    setSubmittedQuery: (q) => set({ submittedQuery: q, page: 1 }),
    setPage: (p) => set({ page: p }),
}));
