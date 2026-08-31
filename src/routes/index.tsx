import { createFileRoute } from "@tanstack/solid-router";

import WelcomeBanner from "#/components/main/WelcomeBanner";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main class="@container/main px-fluid-300 py-fluid-200">
			<WelcomeBanner />
		</main>
	);
}
