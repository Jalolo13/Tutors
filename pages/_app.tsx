import "../styles/globals.css";
import "../styles/_normalize.sass";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "../redux";


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
