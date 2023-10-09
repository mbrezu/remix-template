
import type { LinksFunction } from "@remix-run/node";

import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
} from "@remix-run/react";

import styles from "./tailwind.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
];

export default function App() {
    return (
        <html>
            <head>
                <link
                    rel="icon"
                    href="data:image/x-icon;base64,AA"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <h1 className="text-3xl">Hello world!</h1>
                <Outlet />

                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
