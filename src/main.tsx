import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import "./index.css";
import { FluentProvider, teamsDarkTheme } from "@fluentui/react-components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <FluentProvider theme={teamsDarkTheme}>
            <Provider store={store}>
                <App />
            </Provider>
        </FluentProvider>
    </React.StrictMode>,
);
