import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/solid-router";

import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";

import { HydrationScript } from "solid-js/web";
import { Suspense, type JSXElement } from "solid-js";

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
import "@fontsource/dm-mono";

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

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: JSXElement }>) {
	return (
		<html lang="en" class="bg-bg-surface">
			<head>
				<HydrationScript />
			</head>
			<body class="text-text">
				<HeadContent />
				<Suspense>
					<div class="min-block-svh max-inline-[50rem] lg:max-inline-[90rem] grid lg:grid-cols-[16.25rem_1fr] grid-rows-[auto_1fr_auto] lg:grid-rows-1 bg-bg-page mx-auto">
						<Header />
						<DesktopSidebar />
						{children}
						<MobileNavigationBar />
					</div>
				</Suspense>
				<TanStackRouterDevtools />
				<Scripts />
			</body>
		</html>
	);
}
