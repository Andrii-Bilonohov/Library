export interface BookListItem {
    key: string;
    title: string;
    cover_i?: string;
    author_name?: string[];
    first_publish_year?: number;
}

export interface BookDetails {
    key: string;
    title: string;
    description?: string | { value: string };
    subjects?: string[];
    authors?: {
        author: { key: string };
        type?: { key: string };
    }[];
    covers?: number[];
    subtitle?: string;
}

export interface Author {
    key: string;
    name: string;
}
