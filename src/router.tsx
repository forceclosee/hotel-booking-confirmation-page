import {
	createRouter as createTanStackRouter,
	Link,
} from "@tanstack/solid-router";
import { routeTree } from "./routeTree.gen";

import Button from "./components/ui/Button";

export function getRouter() {
	const router = createTanStackRouter({
		routeTree,

		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		defaultNotFoundComponent: () => {
			return (
				<div class="flex flex-col justify-center items-center p-8 font-dm-sans text-center">
					<span class="font-medium text-4xl">404</span>
					<h1 class="font-medium mbs-8">Page Not Found</h1>
					<p class="mbs-12">
						The page you are looking for doesn't exist. Click button bellow to
						go to the homepage
					</p>
					<Link
						to="/"
						class="min-block-9.5 flex items-center bg-text hover:bg-bg-button-primary-hover focus-visible:bg-bg-button-primary-hover px-4 rounded-xl font-medium text-bg-surface active:scale-95 transition-all duration-200 mbs-8 squircle">
						Back To Homepage
					</Link>
				</div>
			);
		},
		defaultErrorComponent: ({ error, reset }) => {
			return (
				<div class="flex flex-col justify-center items-center p-8 font-dm-sans text-center">
					<p class="text-text-error">{error.message}</p>
					<Button
						class="rounded-xl text-base squircle"
						onClick={() => {
							reset();
						}}>
						Try again
					</Button>
				</div>
			);
		},
	});

	return router;
}

declare module "@tanstack/solid-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
