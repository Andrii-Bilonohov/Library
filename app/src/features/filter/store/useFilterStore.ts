import { create } from "zustand";

export const LANGUAGES = [
    { label: "Swedish", value: "swe" },
    { label: "Italian", value: "ita" },
    { label: "English", value: "eng" },
    { label: "Japanese", value: "jpn" },
    { label: "Catalan", value: "cat" },
    { label: "Turkish", value: "tur" },
    { label: "Bulgarian", value: "bul" },
    { label: "Polish", value: "pol" },
    { label: "Spanish", value: "spa" },
    { label: "Portuguese", value: "por" },
    { label: "French", value: "fre" },
    { label: "Galician", value: "glg" },
    { label: "Slovak", value: "slo" },
    { label: "Korean", value: "kor" },
    { label: "German", value: "ger" },
    { label: "Russian", value: "rus" },
    { label: "Czech", value: "cze" },
    { label: "Dutch", value: "dut" }
];


export const SUBJECTS = [
    { label: "Fantasy", value: "fantasy" },
    { label: "Science Fiction", value: "science_fiction" },
    { label: "History", value: "history" },
    { label: "Art", value: "art" },
    { label: "Biography", value: "biography" },
    { label: "Children’s Books", value: "children" },
    { label: "Mystery", value: "mystery" },
    { label: "Romance", value: "romance" },
    { label: "Horror", value: "horror" },
    { label: "Religion", value: "religion" },
    { label: "Travel", value: "travel" },
    { label: "Philosophy", value: "philosophy" },
    { label: "Poetry", value: "poetry" },
    { label: "Nature", value: "nature" },
    { label: "Music", value: "music" }
];

type Filters = {
    languages: Record<typeof LANGUAGES[number]["value"], boolean>;
    subjects: Record<typeof SUBJECTS[number]["value"], boolean>;
};

type FilterState = Filters;

type FilterAction = {
    setFilter: (
        key: keyof FilterState,
        field: string
    ) => void;

    resetFilters: () => void;
};

const initialState: Filters = {
    languages: LANGUAGES.reduce((acc, item) => {
        acc[item.value] = false;
        return acc;
    }, {} as Filters["languages"]),

    subjects: SUBJECTS.reduce((acc, item) => {
        acc[item.value] = false;
        return acc;
    }, {} as Filters["subjects"])
};

export const useFilterStore = create<FilterState & FilterAction>((set) => ({
    ...initialState,

    setFilter: (key, field) =>
        set((state) => ({
            ...state,
            [key]: {
                ...state[key],
                [field]: !state[key][field]
            }
        })),

    resetFilters: () => set(() => ({ ...initialState }))
}));
