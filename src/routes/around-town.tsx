import { createFileRoute } from "@tanstack/solid-router";

import Construction from "#/components/construction/construction";

export const Route = createFileRoute("/around-town")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main>
			<Construction />
		</main>
	);
}
