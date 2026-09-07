import { classList } from "#/utils/class-helper";
import { Sun } from "lucide-solid";

type Props = {
	class?: string;
};

export default function WelcomeCard(props: Props) {
	return (
		<div
			class={classList(
				"inline-full max-inline-[25rem] to-bg-welcome-card-light bg-linear-to-tr from-30% from-bg-welcome-card-dark p-5.5 rounded-[1.25rem] font-dm-sans text-text-inverse rotate-2 lg:rotate-4 scheme-light",
				props.class,
			)}>
			<div
				class="block-[2px] inline-full border-gradient"
				aria-hidden="true"></div>

			<div class="flex justify-between mbs-4">
				<span class="text-[0.67rem] uppercase">welcome card</span>
				<Sun
					class="block-auto inline-12 row-span-2 fill-bg-sun-dark stroke-text-sun/70"
					strokeWidth={1.5}
				/>
			</div>

			<h2 class="font-serif italic mbs-7.5">
				<span class="text-text-sun/70 text-xl">A note from your host,</span>
				<br />
				<span class="text-[2.375rem]">Margaux.</span>
			</h2>
			<p class="text-text-inverse/80 mbs-7.5">
				We're so glad you're coming. The shutters will be open, the lemonade
				cold, and the cat - Poivre - pretending not to notice you.
			</p>
			<span class="inline-block text-[0.55rem] text-text-inverse/80 uppercase mbs-20">
				Room
			</span>
			<br />
			<span class="font-serif text-xl">La Garrigue</span>
		</div>
	);
}
