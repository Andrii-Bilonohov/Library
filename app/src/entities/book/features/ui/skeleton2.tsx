export const Skeleton2 = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-10 text-gray-100 animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
                <div className="md:col-span-2 flex justify-center">
                    <div className="w-full max-w-md aspect-[3/4] bg-gray-800 rounded-2xl"></div>
                </div>

                <div className="md:col-span-3 space-y-6">
                    <div className="h-10 bg-gray-700 rounded w-3/4"></div>

                    <div className="h-6 bg-gray-700 rounded w-1/2"></div>

                    <div className="bg-gray-900/40 border border-gray-700 rounded-xl p-5 space-y-3">
                        <div className="h-6 bg-gray-700 rounded w-1/3"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-700 rounded w-full"></div>
                            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-700 rounded w-4/6"></div>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
                        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                    </div>

                    <div className="mt-10 space-y-2">
                        <div className="h-6 bg-gray-700 rounded w-1/4"></div>
                        <div className="flex flex-wrap gap-3">
                            <div className="h-6 bg-gray-700 rounded w-20"></div>
                            <div className="h-6 bg-gray-700 rounded w-16"></div>
                            <div className="h-6 bg-gray-700 rounded w-24"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};