import { mergeProps, splitProps, type ComponentProps } from "solid-js";

import { Button as Btn } from "@kobalte/core/button";
import { cn } from "#/utils/class-helper";

type Props = ComponentProps<"button"> & {
	class?: string;
	variant?: "primary" | "secondary";
};

export default function Button(props: Props) {
	const merged = mergeProps({ variant: "primary" }, props);

	const [core, rest] = splitProps(merged, ["class", "variant", "children"]);

	return (
		<Btn
			type="button"
			class={cn(
				"min-block-9.5 px-4 rounded-full font-dm-sans font-medium text-[0.9375rem] active:scale-95 transition-all duration-200 cursor-pointer",
				merged.variant === "primary"
					? "bg-text text-bg-surface hover:bg-bg-button-primary-hover focus-visible:bg-bg-button-primary-hover"
					: "border focus-visible:bg-bg-button-secondary-hover border-border hover:bg-bg-button-secondary-hover",
				core.class,
			)}
			{...rest}>
			{core.children}
		</Btn>
	);
}
