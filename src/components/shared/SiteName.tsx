import { cn } from "#/utils/class-helper";
import { Link } from "@tanstack/solid-router";
import { Sun } from "lucide-solid";

type Props = {
	class?: string;
};

export default function SiteName(props: Props) {
	return (
		<Link
			to="/"
			class={cn(
				"items-center gap-x-3 grid grid-cols-[auto_1fr] text-xl/5.5",
				props.class,
			)}>
			<Sun class="row-span-2 fill-sun-300 stroke-text-terracotta" />
			<span class="text-text-terracotta italic">Maison</span>
			<span class="font-semibold">Soleil</span>
		</Link>
	);
}
