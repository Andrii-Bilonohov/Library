import { useState } from "react";
import { useFilterStore, LANGUAGES, SUBJECTS } from "@/features/filter/store/useFilterStore";

interface FilterProps {
    searchQuery: string;
}

export const Filter = ({ searchQuery }: FilterProps) => {
    const { languages, subjects, setFilter, resetFilters } = useFilterStore();
    const [open, setOpen] = useState(false);

    const toggleLanguage = (lang: string) => setFilter("languages", lang);
    const toggleSubject = (sub: string) => setFilter("subjects", sub);

    const languageLabels = LANGUAGES.reduce((acc, l) => {
        acc[l.value] = l.label;
        return acc;
    }, {} as Record<string, string>);

    const subjectLabels = SUBJECTS.reduce((acc, s) => {
        acc[s.value] = s.label;
        return acc;
    }, {} as Record<string, string>);

    const isDisabled = !searchQuery || searchQuery.trim() === "";

    return (
        <div className="bg-[#02142B] p-6 rounded-2xl shadow-lg border border-cyan-700/40 w-full md:w-80">
            <h3
                className="text-xl font-semibold text-cyan-300 cursor-pointer flex justify-between items-center"
                onClick={() => setOpen(o => !o)}
            >
                Filters
                <span className="text-2xl">{open ? "−" : "+"}</span>
            </h3>

            {open && (
                <div className="mt-4 space-y-6">
                    {/* Languages */}
                    <div>
                        <p className="text-lg font-medium text-white mb-2">Languages</p>
                        <div className="space-y-2 max-h-40 overflow-auto pr-2 custom-scrollbar">
                            {Object.entries(languages).map(([lang, isSelected]) => (
                                <label
                                    key={lang}
                                    className={`flex items-center gap-2 text-cyan-100 hover:text-white cursor-pointer ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => toggleLanguage(lang)}
                                        className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-400"
                                        disabled={isDisabled}
                                    />
                                    <span className="select-none">{languageLabels[lang]}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Subjects */}
                    <div>
                        <p className="text-lg font-medium text-white mb-2">Subjects</p>
                        <div className="space-y-2 max-h-40 overflow-auto pr-2 custom-scrollbar">
                            {Object.entries(subjects).map(([sub, isSelected]) => (
                                <label
                                    key={sub}
                                    className={`flex items-center gap-2 text-cyan-100 hover:text-white cursor-pointer ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => toggleSubject(sub)}
                                        className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-400"
                                        disabled={isDisabled}
                                    />
                                    <span className="select-none">{subjectLabels[sub]}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <button
                        className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={resetFilters}
                        disabled={isDisabled}
                    >
                        Reset
                    </button>
                </div>
            )}
        </div>
    );
};
