import { Outlet } from "react-router";
import { Footer } from "@/widgets/footer/ui";
import { NavBar } from "@/widgets/NavBar/ui";

export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#02142B] text-gray-100">
            <NavBar />

            <main className="flex-1 relative">
                <div
                    className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-blue-900/10
            pointer-events-none"
                />
                <div className="relative z-10">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </div>
    );
};
