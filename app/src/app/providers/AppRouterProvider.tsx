import type { ReactNode } from "react";
import { BrowserRouter } from "react-router";

export const AppRouterProvider = ({ children }: { children: ReactNode }) => {
    const baseName = import.meta.env.DEV ? "" : "/Library";

    return (
        <BrowserRouter basename={baseName}>
            {children}
        </BrowserRouter>
    );
};
