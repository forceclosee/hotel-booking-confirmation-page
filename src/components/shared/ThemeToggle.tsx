import { createSignal, Match, onMount, Switch } from "solid-js";

import createPreventScroll from "solid-prevent-scroll";
import { DropdownMenu } from "@kobalte/core/dropdown-menu";

import { Laptop, Moon, Sun } from "lucide-solid";
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
						"flex justify-between items-center gap-2 hover:bg-bg-card px-4 py-2.5 border border-border-muted rounded-xl text-text-muted hover:text-text focus-visible:text-text transition-colors duration-200 cursor-pointer trim-capital squircle",
						{ "bg-bg-card": open() },
						{ "inline-full": props.isSidebar },
					)}>
					<span>Theme: </span>
					<span>
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
					</span>
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal>
					<DropdownMenu.Content class="gap-1 grid bg-bg-card p-2 border border-border-muted rounded-xl text-text-muted cursor-pointer squircle">
						<DropdownMenu.Item
							onSelect={() => handleSelect("light")}
							class={classList(
								"hover:bg-bg-gray focus-visible:bg-bg-gray p-2 rounded-xl hover:text-text focus-visible:text-text transition-colors duration-200 squircle",
								{ "text-text bg-bg-gray": theme() === "light" },
							)}>
							<DropdownMenu.ItemLabel class="flex items-center gap-2 text-center">
								<span>
									<Sun class="block-[1.3em] inline-auto" />
								</span>
								<span>Light</span>
							</DropdownMenu.ItemLabel>
						</DropdownMenu.Item>
						<DropdownMenu.Item
							onSelect={() => handleSelect("dark")}
							class={classList(
								"hover:bg-bg-gray focus-visible:bg-bg-gray p-2 rounded-xl hover:text-text focus-visible:text-text transition-colors duration-200 squircle",
								{ "text-text bg-bg-gray": theme() === "dark" },
							)}>
							<DropdownMenu.ItemLabel class="flex items-center gap-2 text-center">
								<span>
									<Moon class="block-[1.3em] inline-auto" />
								</span>
								<span>Dark</span>
							</DropdownMenu.ItemLabel>
						</DropdownMenu.Item>
						<DropdownMenu.Item
							onSelect={() => handleSelect("system")}
							class={classList(
								"hover:bg-bg-gray focus-visible:bg-bg-gray p-2 rounded-xl hover:text-text focus-visible:text-text transition-colors duration-200 squircle",
								{ "text-text bg-bg-gray": theme() === "system" },
							)}>
							<DropdownMenu.ItemLabel class="flex items-center gap-2 text-center">
								<span>
									<Laptop class="block-[1.3em] inline-auto" />
								</span>
								<span>System</span>
							</DropdownMenu.ItemLabel>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu>
		</div>
	);
}
