import { Sun } from "lucide-solid";

export default function SiteName() {
	return (
		<div class="items-center gap-x-3 grid grid-cols-[auto_1fr] text-xl/5.5">
			<Sun class="row-span-2 fill-sun-300 stroke-terracotta-600" />
			<span class="text-terracotta-600 italic">Maison</span>
			<span class="font-semibold">Soleil</span>
		</div>
	);
}
