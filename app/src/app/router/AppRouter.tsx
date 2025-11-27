import {Route, Routes} from "react-router";
import {ROUTE_ENUM} from "@/shared/config";
import {Home} from "@/pages/home/Home.tsx";
import {MainLayout} from "@/shared/ui/layouts/main-layout";
import {Catalog} from "@/pages/catalog/Catalog.tsx";
import {BookDetails} from "@/entities/book/ui/BookDetails.tsx";
import {PageNotFound} from "@/shared/ui";

export const AppRouter = () => {
    return <Routes>
        <Route path={ROUTE_ENUM.MAIN} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={ROUTE_ENUM.catalog} element={<Catalog />} />
            <Route path={ROUTE_ENUM.book} element={<BookDetails />} />
        </Route>
        <Route path={"*"} element={<PageNotFound />} />
    </Routes>
};