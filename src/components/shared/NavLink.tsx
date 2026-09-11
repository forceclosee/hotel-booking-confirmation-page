import { For, Show } from "solid-js";
import { Link } from "@tanstack/solid-router";
import { BedDouble, House, Mail, MapPin } from "lucide-solid";
import BreakfastOutlineIcon from "#/icon/icon-breakfast-outline.svg?solid";

import { classList } from "#/utils/class-helper";

const links = [
	{
		icon: BedDouble,
		label: "Your stay",
		href: "/",
		haveBadge: true,
		badge: 1,
	},
	{
		icon: House,
		label: "The house",
		href: "/the-house",
	},
	{
		icon: MapPin,
		label: "Around town",
		href: "/around-town",
	},
	{
		icon: BreakfastOutlineIcon,
		label: "Breakfast",
		href: "/breakfast",
	},
	{
		icon: Mail,
		label: "Messages",
		href: "/messages",
	},
];

type Props = {
	isDesktop?: boolean;
};

export default function NavLink(props: Props) {
	return (
		<nav>
			<ul
				class={classList(
					"flex gap-x-1 gap-y-0.5 font-dm-sans text-sm text-text-muted",
					props.isDesktop ? "flex-col" : "flex-row",
				)}>
				<For each={links}>
					{(item) => (
						<li class="group">
							{/* desktop sidebar nav */}
							<Link
								to={item.href}
								class={classList(
									"squircle flex items-center gap-2 rounded-xl transition-colors duration-200 data-[status=active]:text-text data-[status=active]:ring-1 data-[status=active]:ring-border-muted data-[status=active]:ring-inset",
									props.isDesktop
										? "squircle items-center rounded-xl px-3.5 py-2.5 hover:bg-bg-card hover:text-text hover:ring-1 hover:ring-border-muted hover:ring-inset focus-visible:bg-bg-card focus-visible:text-text data-[status=active]:bg-bg-card"
										: "relative flex-col px-4 py-3 data-[status=active]:bg-bg-gray",
								)}>
								<item.icon
									class={classList(
										"group-has-data-[status=active]:text-text",
										props.isDesktop
											? "block-4.5 inline-4.5"
											: "block-6 inline-6 sm:inline-5 sm:block-5",
									)}
								/>
								<span
									class={classList({
										"hidden text-xs sm:block": !props.isDesktop,
									})}>
									{item.label}
								</span>
								<Show when={item.haveBadge}>
									<span
										class={classList(
											"block-4 inline-4 ms-auto flex items-center justify-center rounded-full bg-bg-terracotta font-serif text-2xs text-text-inverse",
											{
												"absolute inset-bs-1 inset-e-1.5 sm:inset-e-3":
													!props.isDesktop,
											},
										)}>
										{item.badge}
									</span>
								</Show>
							</Link>
						</li>
					)}
				</For>
			</ul>
		</nav>
	);
}
