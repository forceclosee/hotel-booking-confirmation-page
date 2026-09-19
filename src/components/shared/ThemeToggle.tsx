import { createSignal, Match, onMount, Show, Switch } from "solid-js";

import createPreventScroll from "solid-prevent-scroll";
import { DropdownMenu } from "@kobalte/core/dropdown-menu";

import { ChevronDown, Laptop, Moon, Sun } from "lucide-solid";
import { classList } from "#/utils/class-helper";

type Props = {
	class?: string;
	isSidebar?: boolean;
};

export default function ThemeToggle(props: Props) {
	const [open, setOpen] = createSignal(false);
	const [dropdownRef, setDropdownRef] = createSignal<HTMLDivElement | null>(
		null,
	);

	type Theme = "light" | "dark" | "system";

	const [theme, setTheme] = createSignal<Theme>("system");

	// get saved theme from local storage
	onMount(() => {
		const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
		setTheme(savedTheme);
	});

	const handleSelect = (target: Theme) => {
		setTheme(target);
		document.documentElement.setAttribute("data-theme", theme());
		localStorage.setItem("theme", theme());
	};

	// disable page scroll when dropdown is open
	createPreventScroll({
		element: dropdownRef,
		enabled: () => open(),
		preventScrollbarShift: false,
	});

	return (
		<div class={props.class}>
			<DropdownMenu
				ref={setDropdownRef}
				gutter={5}
				open={open()}
				onOpenChange={setOpen}
				sameWidth={true}
				preventScroll={false}>
				<DropdownMenu.Trigger
					class={classList(
						"trim-capital squircle flex cursor-pointer items-center gap-2 rounded-xl border border-border-muted py-2.5 ps-4 pe-3 font-dm-sans text-text-muted transition-colors duration-200 hover:bg-bg-card hover:text-text focus-visible:text-text",
						{ "bg-bg-card": open() },
						{ "inline-full": props.isSidebar },
					)}>
					<span class="hidden min-[23rem]:inline">Theme:</span>

					<span class="flex items-center gap-2">
						<Switch>
							<Match when={theme() === "light"}>
								<Sun class="block-[1.3em] inline-auto" />
							</Match>
							<Match when={theme() === "dark"}>
								<Moon class="block-[1.3em] inline-auto" />
							</Match>
							<Match when={theme() === "system"}>
								<Laptop class="block-[1.3em] inline-auto" />
							</Match>
						</Switch>

						<Show when={props.isSidebar}>
							<Switch>
								<Match when={theme() === "light"}>
									<span>Light</span>
								</Match>
								<Match when={theme() === "dark"}>
									<span>Dark</span>
								</Match>
								<Match when={theme() === "system"}>
									<span>System</span>
								</Match>
							</Switch>
						</Show>
					</span>

					<DropdownMenu.Icon class="ms-auto">
						<ChevronDown class="block-[1.3em]" />
					</DropdownMenu.Icon>
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal>
					<DropdownMenu.Content class="squircle z-dropdown grid cursor-pointer gap-1 rounded-xl border border-border-muted bg-bg-card p-2 font-dm-sans text-text-muted">
						<DropdownMenu.Item
							onSelect={() => handleSelect("light")}
							class={classList(
								"squircle rounded-xl p-2 transition-colors duration-200 hover:bg-bg-gray hover:text-text focus-visible:bg-bg-gray focus-visible:text-text",
								{ "bg-bg-gray text-text": theme() === "light" },
							)}>
							<DropdownMenu.ItemLabel class="flex items-center gap-2">
								<Sun class="block-[1.3em]" />
								<span>Light</span>
							</DropdownMenu.ItemLabel>
						</DropdownMenu.Item>

						<DropdownMenu.Item
							onSelect={() => handleSelect("dark")}
							class={classList(
								"squircle rounded-xl p-2 transition-colors duration-200 hover:bg-bg-gray hover:text-text focus-visible:bg-bg-gray focus-visible:text-text",
								{ "bg-bg-gray text-text": theme() === "dark" },
							)}>
							<DropdownMenu.ItemLabel class="flex items-center gap-2">
								<Moon class="block-[1.3em]" />
								<span>Dark</span>
							</DropdownMenu.ItemLabel>
						</DropdownMenu.Item>

						<DropdownMenu.Item
							onSelect={() => handleSelect("system")}
							class={classList(
								"squircle rounded-xl p-2 transition-colors duration-200 hover:bg-bg-gray hover:text-text focus-visible:bg-bg-gray focus-visible:text-text",
								{ "bg-bg-gray text-text": theme() === "system" },
							)}>
							<DropdownMenu.ItemLabel class="flex items-center gap-2">
								<Laptop class="block-[1.3em]" />
								<span>System</span>
							</DropdownMenu.ItemLabel>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu>
		</div>
	);
}
