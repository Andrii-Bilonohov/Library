import type {ReactNode} from "react";
import {BrowserRouter} from "react-router";

export const AppRouterProvider = ({children}: {children: ReactNode}) => {
    return <BrowserRouter>{children}</BrowserRouter>
}