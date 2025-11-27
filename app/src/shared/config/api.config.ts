export const API_URL = "https://openlibrary.org";

export const ENDPOINTS_URL = {
    getBooks: (q: string, page: number, limit: number, offset: number) =>`${API_URL}/search.json?q=${q}&page=${page}&limit=${limit}&offset=${offset}`,
    getBook: (key: string) => `${API_URL}${key}.json`,
    getAuthor: (key: string) => `${API_URL}${key}.json`,
}