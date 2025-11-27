import {useMemo} from "react";
import {cn} from "@/shared/lib";


interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
}

const avarageVal = (a: number, b: number) => {
    return Math.floor((a+b)/2);
}

export const Pagination = ({
                        currentPage,
                        totalPages,
                        onPageChange,
                        siblingCount = 1
                    }: PaginationProps) => {

    const paginationRange = useMemo(()=> {
        const totalPageNumbers = siblingCount * 2 + 5;
        if(totalPageNumbers >= totalPages){
            return Array.from({length: totalPages}, (_, i) => i+1);
        }
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
        const firstPageIndex = 1;
        const lastPageIndex = totalPages;

        const shouldLeftDots = leftSiblingIndex > 2;
        const shouldRightDots = rightSiblingIndex < totalPages - 1;


        if(!shouldLeftDots && shouldRightDots) {
            const leftRange = Array.from(
                {length: 3 + 2 * siblingCount},
                (_, i) => i+1,
            )
            return [...leftRange, {isMiddleBtn: true, page: avarageVal(leftRange.length - 1, lastPageIndex)}, lastPageIndex];
        }

        if(shouldLeftDots && !shouldRightDots){
            const rightRange = Array.from(
                {length: 3 + 2 * siblingCount},
                (_, i) => totalPages - (3 + 2 * siblingCount) + 1 + i,
            )

            return [firstPageIndex, {isMiddleBtn: true, page: avarageVal(firstPageIndex, rightRange[0])}, ...rightRange]
        }

        if(shouldLeftDots && shouldRightDots){
            const middleRange = Array.from(
                {length: rightSiblingIndex - leftSiblingIndex + 1},
                (_, i) => leftSiblingIndex + i
            )
            return [
                firstPageIndex,
                {isMiddleBtn: true, page: avarageVal(firstPageIndex, middleRange[0])},
                ...middleRange,
                {isMiddleBtn: true, page: avarageVal(middleRange[middleRange.length - 1], lastPageIndex)},
                lastPageIndex
            ];
        }

        return []
    }, [currentPage, totalPages, siblingCount])



    if(totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            {/* Prev */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg bg-gray-800/70 text-cyan-300 shadow-md
               hover:bg-gray-700 hover:text-white transition-all duration-300
               disabled:opacity-40 disabled:cursor-not-allowed"
            >
                ←
            </button>

            {/* Pages */}
            {paginationRange.map((page, i) =>
                typeof page !== "number" && page?.isMiddleBtn ? (
                    <button
                        key={i}
                        onClick={() => onPageChange(page?.page as number)}
                        className="px-3 py-2 rounded-lg bg-gray-800/70 text-gray-300
                   hover:bg-gray-700 hover:text-cyan-300 transition-all duration-300"
                    >
                        ...
                    </button>
                ) : (
                    <button
                        key={i}
                        onClick={() => onPageChange(page as number)}
                        className={cn(
                            "px-3 py-2 rounded-lg transition-all duration-300 shadow-md",
                            page === currentPage
                                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-cyan-500/40"
                                : "bg-gray-800/70 text-gray-300 hover:bg-gray-700 hover:text-cyan-300"
                        )}
                    >
                        {page as number}
                    </button>
                )
            )}

            {/* Next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg bg-gray-800/70 text-cyan-300 shadow-md
               hover:bg-gray-700 hover:text-white transition-all duration-300
               disabled:opacity-40 disabled:cursor-not-allowed"
            >
                →
            </button>
        </div>

    );
};