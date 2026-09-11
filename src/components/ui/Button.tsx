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
				"min-block-9.5 cursor-pointer rounded-full px-4 font-dm-sans font-medium text-[0.9375rem] transition-all duration-200 active:scale-95",
				merged.variant === "primary"
					? "bg-text text-bg-surface hover:bg-bg-button-primary-hover focus-visible:bg-bg-button-primary-hover"
					: "border border-border hover:bg-bg-button-secondary-hover focus-visible:bg-bg-button-secondary-hover",
				core.class,
			)}
			{...rest}>
			{core.children}
		</Btn>
	);
}
