import { mergeProps, type ComponentProps } from "solid-js";

import { Button as Btn } from "@kobalte/core/button";
import { classList } from "#/utils/class-helper";

type Props = ComponentProps<"button"> & {
	variant?: "primary" | "secondary";
};

export default function Button(props: Props) {
	const merged = mergeProps({ variant: "primary" }, props);

	return (
		<Btn
			type="button"
			class={classList(
				"px-4 py-2.5 rounded-full font-dm-sans font-medium text-[0.9375rem]",
				merged.variant === "primary"
					? "bg-neutral-900 text-neutral-0"
					: "border border-border",
			)}>
			{props.children}
		</Btn>
	);
}
