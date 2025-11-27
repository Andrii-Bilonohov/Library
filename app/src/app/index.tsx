import './styles/index.css';
import {AppRouter} from "@/app/router";
import {AppRouterProvider, StoreProvider, TanstackQueryProvider} from "@/app/providers";


export const App = () => {
    return (
        <StoreProvider >
            <AppRouterProvider>
                <TanstackQueryProvider>
                    <AppRouter />
                </TanstackQueryProvider>
            </AppRouterProvider>
        </StoreProvider>
        )
}
