import { cn } from "#/utils/class-helper";
import {
	Skeleton as Loader,
	type SkeletonRootProps,
} from "@kobalte/core/skeleton";
import { mergeProps, splitProps } from "solid-js";

type Props = SkeletonRootProps & {
	variant?: "rectangle" | "circle";
	class?: string;
};

export default function Skeleton(props: Props) {
	const merged = mergeProps({ variant: "rectangle" }, props);

	const [core, rest] = splitProps(merged, ["variant", "class"]);

	return (
		<Loader
			circle={core.variant === "circle"}
			radius={5}
			class={cn(
				"wave bg-linear-to-r bg-size-[200%_100%] from-gray-400/60 via-gray-500/60 to-gray-400/60 starting:opacity-0 transition-all transition-discrete duration-75",
				core.class,
			)}
			{...rest}
		/>
	);
}
