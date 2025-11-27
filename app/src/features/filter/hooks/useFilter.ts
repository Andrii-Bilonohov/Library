import { useState, useMemo } from "react";
import {LANGUAGES, SUBJECTS} from "@/features/filter/store/useFilterStore.ts";

export const useFilter = () => {
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

    const languageOptions = useMemo(() => LANGUAGES.map(l => l.value), []);
    const subjectOptions = useMemo(() => SUBJECTS.map(s => s.value), []);

    const toggleLanguage = (langValue: string) => {
        setSelectedLanguages(prev =>
            prev.includes(langValue)
                ? prev.filter(v => v !== langValue)
                : [...prev, langValue]
        );
    };

    const toggleSubject = (subValue: string) => {
        setSelectedSubjects(prev =>
            prev.includes(subValue)
                ? prev.filter(v => v !== subValue)
                : [...prev, subValue]
        );
    };

    const resetFilters = () => {
        setSelectedLanguages([]);
        setSelectedSubjects([]);
    };

    const applyFilters = (books: any[]) => {
        return books.filter(book =>
            (selectedLanguages.length === 0 || selectedLanguages.includes(book.language)) &&
            (selectedSubjects.length === 0 || selectedSubjects.includes(book.subject))
        );
    };

    return {
        languageOptions,
        subjectOptions,
        selectedLanguages,
        selectedSubjects,
        toggleLanguage,
        toggleSubject,
        resetFilters,
        applyFilters,
    };
};
