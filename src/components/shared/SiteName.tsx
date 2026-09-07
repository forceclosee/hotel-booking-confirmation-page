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
			<Sun class="block-auto inline-8 row-span-2 fill-bg-weather stroke-text-terracotta" />
			<span class="text-text-terracotta italic">Maison</span>
			<span class="font-semibold">Soleil</span>
		</Link>
	);
}
