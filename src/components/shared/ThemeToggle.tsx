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
						"flex gap-2 hover:bg-bg-card px-4 py-2.5 rounded-xl text-text-muted hover:text-text focus-visible:text-text transition-colors duration-200 cursor-pointer squircle",
						{ "bg-bg-card": open() },
					)}>
					<span>Theme: </span>
					<span>
						<Switch>
							<Match when={theme() === "light"}>
								<Sun />
							</Match>
							<Match when={theme() === "dark"}>
								<Moon />
							</Match>
							<Match when={theme() === "system"}>
								<Laptop />
							</Match>
						</Switch>
					</span>
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal>
					<DropdownMenu.Content class="bg-bg-card p-2 border border-border-muted rounded-xl text-text-muted cursor-pointer squircle">
						<DropdownMenu.Item
							onSelect={() => setTheme("light")}
							class={classList(
								"p-2 rounded-xl hover:text-text focus-visible:text-text squircle",
								{ "text-text bg-bg-sun": theme() === "light" },
							)}>
							<DropdownMenu.ItemLabel class="flex gap-2 text-center">
								<span>
									<Sun />
								</span>
								<span>Light</span>
							</DropdownMenu.ItemLabel>
						</DropdownMenu.Item>
						<DropdownMenu.Item
							onSelect={() => setTheme("dark")}
							class={classList(
								"p-2 rounded-xl hover:text-text focus-visible:text-text squircle",
								{ "text-text bg-bg-sun": theme() === "dark" },
							)}>
							<DropdownMenu.ItemLabel class="flex gap-2 text-center">
								<span>
									<Moon />
								</span>
								<span>Dark</span>
							</DropdownMenu.ItemLabel>
						</DropdownMenu.Item>
						<DropdownMenu.Item
							onSelect={() => setTheme("system")}
							class={classList(
								"p-2 rounded-xl hover:text-text focus-visible:text-text squircle",
								{ "text-text bg-bg-sun": theme() === "system" },
							)}>
							<DropdownMenu.ItemLabel class="flex gap-2 text-center">
								<span>
									<Laptop />
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
