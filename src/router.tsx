import {
	createRouter as createTanStackRouter,
	Link,
} from "@tanstack/solid-router";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
	const router = createTanStackRouter({
		routeTree,

		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		defaultNotFoundComponent: () => {
			return (
				<div class="flex flex-col justify-center items-center p-8 text-center">
					<span class="text-4xl">404</span>
					<h1 class="mbs-8">Page Not Found</h1>
					<p class="mbs-12">
						The page you are looking for doesn't exist. Click button bellow to
						go to the homepage
					</p>
					<Link
						to="/"
						class="inline-block bg-black/30 hover:bg-black/40 px-4 py-3 rounded-lg active:scale-95 transition-[scale] duration-200 squircle mbs-8">
						Back To Homepage
					</Link>
				</div>
			);
		},
		defaultErrorComponent: ({ error, reset }) => {
			return (
				<div class="flex flex-col justify-center items-center p-8 text-center">
					<p class="text-red-200">{error.message}</p>
					<button
						type="button"
						class="inline-block bg-black/30 hover:bg-black/40 px-4 py-2 rounded-lg active:scale-95 transition-[scale] duration-200 cursor-pointer squircle"
						onClick={() => {
							reset();
						}}>
						Try again
					</button>
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
