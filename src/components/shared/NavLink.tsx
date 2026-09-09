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
					"flex gap-x-1 gap-y-0.5 font-dm-sans text-text-muted text-sm",
					props.isDesktop ? "flex-col" : "flex-row",
				)}>
				<For each={links}>
					{(item) => (
						<li class="group">
							{/* desktop sidebar nav */}
							<Link
								to={item.href}
								class={classList(
									"flex items-center gap-2 data-[status=active]:ring-border-muted rounded-xl data-[status=active]:ring-1 data-[status=active]:ring-inset data-[status=active]:text-text transition-colors duration-200 squircle",
									props.isDesktop
										? "hover:bg-bg-card data-[status=active]:bg-bg-card focus-visible:bg-bg-card px-3.5 py-2.5 hover:ring-border-muted rounded-xl hover:ring-1 hover:ring-inset hover:text-text focus-visible:text-text items-center squircle"
										: "px-4 py-3 flex-col relative data-[status=active]:bg-bg-gray",
								)}>
								<item.icon
									class={classList(
										"group-has-data-[status=active]:text-text",
										props.isDesktop
											? "block-4.5 inline-4.5 "
											: "block-6 inline-6 sm:inline-5 sm:block-5",
									)}
								/>
								<span
									class={classList({
										"hidden sm:block text-xs": !props.isDesktop,
									})}>
									{item.label}
								</span>
								<Show when={item.haveBadge}>
									<span
										class={classList(
											"block-4 inline-4 flex justify-center items-center bg-bg-terracotta ms-auto rounded-full font-serif text-2xs text-text-inverse",
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
