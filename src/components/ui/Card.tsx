import { classList } from "#/utils/class-helper";
import type { Component, JSX, JSXElement } from "solid-js";

type Props = {
	icon: Component<JSX.SvgSVGAttributes<SVGSVGElement>>;
	label: "Arrival" | "Wifi" | "Breakfast";
	number: "01" | "02" | "03";
	title: string;
	subtitle: string;
	children: JSXElement;
};

export default function Card(props: Props) {
	return (
		<section class="inline-full max-inline-[22rem] pbs-6 pbe-8 squircle rounded-3xl border border-border-muted bg-bg-card px-5 font-dm-sans">
			<div class="flex items-center gap-2.5">
				<span
					class={classList(
						"squircle inline-block rounded-2xl p-2",
						{ "bg-bg-terracotta": props.label === "Arrival" },
						{ "bg-wifi": props.label === "Wifi" },
						{ "bg-breakfast": props.label === "Breakfast" },
					)}>
					<props.icon class="block-auto inline-6 text-text-inverse" />
				</span>
				<span
					class={classList(
						"font-dm-mono font-medium uppercase tracking-wider",
						{ "text-bg-terracotta": props.label === "Arrival" },
						{ "text-wifi": props.label === "Wifi" },
						{ "text-breakfast": props.label === "Breakfast" },
					)}>
					{props.label}
				</span>
				<span
					class={classList(
						"ms-auto font-serif text-2xl",
						{ "text-bg-terracotta": props.label === "Arrival" },
						{ "text-wifi": props.label === "Wifi" },
						{ "text-breakfast": props.label === "Breakfast" },
					)}>
					{props.number}
				</span>
			</div>

			<h2 class="mbs-8 font-serif text-2xl">{props.title}</h2>
			<p class="mbe-4 mbs-2 text-text-muted text-xs">{props.subtitle}</p>
			{props.children}
		</section>
	);
}
