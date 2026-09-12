import {
	HeadContent,
	Outlet,
	ScriptOnce,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/solid-router";

import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";

import { HydrationScript } from "solid-js/web";
import { Suspense, type JSXElement } from "solid-js";

import { Toast } from "@kobalte/core/toast";

import favicon from "/icon.svg";
import globalCss from "#/styles/global.css?url";

import Header from "#/components/layout/Header";
import DesktopSidebar from "#/components/layout/DesktopSidebar";
import MobileNavigationBar from "#/components/layout/MobileNavigationBar";

// FONT
// fraunces weights 100-900
import "@fontsource-variable/fraunces/wght.css";
import "@fontsource-variable/fraunces/wght-italic.css";

// dm sans weights 100-900
import "@fontsource-variable/dm-sans/wght.css";

// dm mono static
import "@fontsource/dm-mono/400.css";
import "@fontsource/dm-mono/500.css";

export const Route = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{
				charset: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1.0",
			},
			{
				title: "Hotel Booking Confirmation Page | ForceClose",
			},
			{
				name: "author",
				content: "Force Close",
			},
			{
				name: "description",
				content: "",
			},

			// OG Tags
			{
				property: "og:title",
				content: "Hotel Booking Confirmation Page",
			},
			{
				property: "og:description",
				content: "",
			},
			{
				property: "og:image",
				content: "" /* isi image */,
			},
			{
				property: "og:url",
				content: "" /* isi live site url */,
			},
			{
				property: "og:type",
				content: "website",
			},
			{
				property: "og:site_name",
				content: "Force Close Portfolio",
			},
		],

		links: [
			// favicon
			{
				rel: "icon",
				href: favicon,
				type: "image/svg+xml",
			},

			// css
			{
				rel: "stylesheet",
				href: globalCss,
			},
		],
	}),
	component: RootComponent,
});

const themeScript = `(function() {
  try {
    const savedTheme = localStorage.getItem("theme") || "system";
		document.documentElement.setAttribute("data-theme", savedTheme);
  } catch (e) {}
})();`;

function ThemeProvider({ children }: { children: JSXElement }) {
	return (
		<>
			<ScriptOnce children={themeScript} />
			{children}
		</>
	);
}

function RootComponent() {
	return (
		<RootDocument>
			<ThemeProvider>
				<Outlet />
			</ThemeProvider>
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: JSXElement }>) {
	return (
		<html lang="en" class="bg-bg-surface print:bg-transparent">
			<head>
				<HydrationScript />
				<HeadContent />
			</head>
			<body class="text-text">
				<Suspense>
					<div class="min-block-svh lg:max-inline-[90rem] mx-auto grid grid-rows-[auto_1fr_auto] bg-bg-page lg:grid-cols-[16.25rem_1fr] lg:grid-rows-1 print:block print:bg-transparent">
						<Header />
						<DesktopSidebar />
						{children}
						<MobileNavigationBar />
					</div>
					<Toast.Region class="fixed inset-be-toast-viewport inset-e-toast-viewport">
						<Toast.List class="grid gap-2" />
					</Toast.Region>
				</Suspense>
				<TanStackRouterDevtools />
				<Scripts />
			</body>
		</html>
	);
}
