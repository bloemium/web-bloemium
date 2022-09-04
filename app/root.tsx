import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import mainStyle from "./styles/main.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Bloemium",
  description: "bloemium software development services",
  viewport: "width=device-width,initial-scale=1",
  keywords:
    "bloemium, software, development, typescript, javascript, frontend, react, remix, full-stack, cloud, azure, o365, office 365, sharepoint, sharepoint online, spo",
});

export const links: LinksFunction = () => {
  return [
    { rel: "canonical", href: "https://bloemium.com" },
    { rel: "stylesheet", href: mainStyle },
    { rel: "icon", href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌸</text></svg>" },
  ];
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
