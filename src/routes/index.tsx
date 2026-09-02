import { createFileRoute } from "@tanstack/solid-router";

import WelcomeBanner from "#/components/main/WelcomeBanner";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main class="@container/main inline-full max-inline-[50rem] lg:max-inline-full justify-self-center px-fluid-300 py-fluid-200">
			<WelcomeBanner />
		</main>
	);
}
