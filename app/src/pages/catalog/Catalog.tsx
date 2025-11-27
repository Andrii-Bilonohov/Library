import {SearchBar} from "@/features/search-bar/ui";
import {Books} from "@/entities/book/ui";
import {Filter} from "@/features/filter/ui";
import {useBookStore} from "@/entities/book/store";

export const Catalog = () => {

    const {query} = useBookStore();

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-row">
                <div>
                    <Filter searchQuery={query} />
                </div>
                <div className="w-full">
                    <SearchBar />
                    <Books />
                </div>
            </div>
        </div>
    );
};
