import { createEffect, createSignal, Match, onMount, Switch } from "solid-js";

import { DropdownMenu } from "@kobalte/core/dropdown-menu";
import { classList } from "#/utils/class-helper";
import { Laptop, Moon, Sun } from "lucide-solid";

type Props = {
	class?: string;
};

export default function ThemeToggle(props: Props) {
	const [open, setOpen] = createSignal(false);

	type Theme = "light" | "dark" | "system";
	const [theme, setTheme] = createSignal<Theme>("system");

	// set theme state setelah hidrasi
	onMount(() => {
		const savedTheme = localStorage.getItem("theme") as Theme;
		setTheme(savedTheme);
	});

	// set data-theme attribute
	createEffect(() => {
		document.documentElement.setAttribute("data-theme", theme());
		localStorage.setItem("theme", theme());
	});

	return (
		<div class={props.class}>
			<DropdownMenu gutter={5} open={open()} onOpenChange={setOpen}>
				<DropdownMenu.Trigger
					class={classList(
						"flex items-center gap-2 hover:bg-bg-card px-4 py-2.5 rounded-xl text-text-muted hover:text-text focus-visible:text-text transition-colors duration-200 cursor-pointer trim-capital squircle",
						{ "bg-bg-card": open() },
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
							onSelect={() => setTheme("light")}
							class={classList(
								"hover:bg-bg-sun focus-visible:bg-bg-sun p-2 rounded-xl hover:text-text focus-visible:text-text transition-colors duration-200 squircle",
								{ "text-text bg-bg-sun": theme() === "light" },
							)}>
							<DropdownMenu.ItemLabel class="flex items-center gap-2 text-center">
								<span>
									<Sun class="block-[1.3em] inline-auto" />
								</span>
								<span>Light</span>
							</DropdownMenu.ItemLabel>
						</DropdownMenu.Item>
						<DropdownMenu.Item
							onSelect={() => setTheme("dark")}
							class={classList(
								"hover:bg-bg-sun focus-visible:bg-bg-sun p-2 rounded-xl hover:text-text focus-visible:text-text transition-colors duration-200 squircle",
								{ "text-text bg-bg-sun": theme() === "dark" },
							)}>
							<DropdownMenu.ItemLabel class="flex items-center gap-2 text-center">
								<span>
									<Moon class="block-[1.3em] inline-auto" />
								</span>
								<span>Dark</span>
							</DropdownMenu.ItemLabel>
						</DropdownMenu.Item>
						<DropdownMenu.Item
							onSelect={() => setTheme("system")}
							class={classList(
								"hover:bg-bg-sun focus-visible:bg-bg-sun p-2 rounded-xl hover:text-text focus-visible:text-text transition-colors duration-200 squircle",
								{ "text-text bg-bg-sun": theme() === "system" },
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
