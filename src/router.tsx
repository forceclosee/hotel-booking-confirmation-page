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
				<div class="flex flex-col items-center justify-center p-8 text-center font-dm-sans">
					<span class="font-medium text-4xl">404</span>
					<h1 class="mbs-8 font-medium">Page Not Found</h1>
					<p class="mbs-12">
						The page you are looking for doesn't exist. Click button bellow to
						go to the homepage
					</p>
					<Link
						to="/"
						class="min-block-9.5 mbs-8 squircle flex items-center rounded-xl bg-text px-4 font-medium text-bg-surface transition-all duration-200 hover:bg-bg-button-primary-hover focus-visible:bg-bg-button-primary-hover active:scale-95">
						Back To Homepage
					</Link>
				</div>
			);
		},
		defaultErrorComponent: ({ error, reset }) => {
			return (
				<div class="flex flex-col items-center justify-center p-8 text-center font-dm-sans">
					<p class="text-text-error">{error.message}</p>
					<Button
						class="squircle rounded-xl text-base"
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
