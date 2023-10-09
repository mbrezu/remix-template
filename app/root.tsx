
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
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
                <Meta />
                <Links />
            </head>
            <body className="font-inter">
                <h1 className="text-xl">Hello world!</h1>
                <Outlet />

                <Scripts />
                <LiveReload port={54323} />
            </body>
        </html>
    );
}
