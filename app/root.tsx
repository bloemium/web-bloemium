import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Bloemium",
  description: "bloemium software development services",
  viewport: "width=device-width,initial-scale=1",
  keywords:
    "bloemium, software, development, typescript, javascript, frontend, react, remix, full-stack, cloud, azure, o365, office 365, sharepoint, sharepoint online, spo",
});

export const links: LinksFunction = () => {
  return [{ rel: "canonical", href: 'https://bloemium.com' }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-neutral-900">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
