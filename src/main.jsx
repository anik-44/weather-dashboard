import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import {Provider} from "react-redux";
import store from "./store/store.js";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const client = new QueryClient()

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={client}>
                <App/>
                {/*<ReactQueryDevtools initialIsOpen={true} />*/}
            </QueryClientProvider>
        </Provider>
    </StrictMode>,
)
