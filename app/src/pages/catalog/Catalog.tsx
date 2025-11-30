import {SearchBar} from "@/features/search-bar/ui";
import {Books} from "@/entities/book/ui";
import {Filter} from "@/features/filter/ui";
import {useBookStore} from "@/entities/book/store";

export const Catalog = () => {
    const { query } = useBookStore();

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-10">

            <div className="flex flex-col lg:flex-row gap-10">

                <div className="hidden lg:block w-72 flex-shrink-0">
                    <Filter searchQuery={query} />
                </div>

                <div className="flex-1">

                    <div className="md:hidden mb-6">
                        <Filter searchQuery={query} />
                        <div className="mt-6">
                            <SearchBar />
                        </div>
                    </div>

                    <div className="hidden md:flex lg:hidden mb-6 gap-6 items-start">
                        <div className="w-64 mr-15">
                            <Filter searchQuery={query} />
                        </div>
                        <div className="flex-1">
                            <SearchBar />
                        </div>
                    </div>

                    <div className="hidden lg:block mb-6">
                        <SearchBar />
                    </div>

                    <Books />
                </div>
            </div>
        </div>
    );
};
