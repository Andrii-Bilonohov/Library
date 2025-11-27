type skeletonProps = {
    length: number;
}

export const Skeleton = ({length} : skeletonProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {Array.from({ length: length }).map((_, i) => (
                <div
                    key={i}
                    className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
                >
                    <div className="w-70 h-64 skeleton-shine animate-shine" />

                    <div className="p-4 space-y-3">
                        <div className="h-6 rounded w-3/4 skeleton-shine animate-shine" />
                        <div className="flex flex-col gap-2">
                            <div className="h-4 rounded w-2/3 skeleton-shine animate-shine" />
                            <div className="h-4 rounded w-1/3 skeleton-shine animate-shine" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
