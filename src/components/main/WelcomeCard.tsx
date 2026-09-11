import { classList } from "#/utils/class-helper";
import { Sun } from "lucide-solid";

type Props = {
	class?: string;
};

export default function WelcomeCard(props: Props) {
	return (
		<div
			class={classList(
				"inline-full max-inline-[25rem] scheme-light rotate-2 rounded-[1.25rem] bg-linear-to-tr from-30% from-bg-welcome-card-dark to-bg-welcome-card-light p-5.5 font-dm-sans text-text-inverse lg:rotate-4",
				props.class,
			)}>
			<div
				class="block-[2px] inline-full border-gradient"
				aria-hidden="true"></div>

			<div class="mbs-4 flex justify-between">
				<span class="text-[0.67rem] uppercase">welcome card</span>
				<Sun
					class="block-auto inline-12 row-span-2 fill-bg-sun-dark stroke-text-sun/70"
					strokeWidth={1.5}
				/>
			</div>

			<h2 class="mbs-7.5 font-serif italic">
				<span class="text-text-sun/70 text-xl">A note from your host,</span>
				<br />
				<span class="text-[2.375rem]">Margaux.</span>
			</h2>
			<p class="mbs-7.5 text-text-inverse/80">
				We're so glad you're coming. The shutters will be open, the lemonade
				cold, and the cat - Poivre - pretending not to notice you.
			</p>
			<span class="mbs-20 inline-block text-[0.55rem] text-text-inverse/80 uppercase">
				Room
			</span>
			<br />
			<span class="font-serif text-xl">La Garrigue</span>
		</div>
	);
}
