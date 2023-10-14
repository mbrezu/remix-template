import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";

import styles from "./tailwind.css";
import { Meta, Links, Outlet, Scripts, LiveReload } from "@remix-run/react";
import Header from "./components/Header";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function Component() {
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
                <Header/>
                <Outlet />

                <Scripts />
                <LiveReload port={54323} />
            </body>
        </html>
    );
}
