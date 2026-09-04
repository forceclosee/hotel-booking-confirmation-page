import { createSignal } from "solid-js";

import SiteName from "#/components/shared/SiteName";
import ThemeToggle from "#/components/shared/ThemeToggle";
import Button from "#/components/ui/Button";
import MobileMenu from "#/components/shared/MobileMenu";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = createSignal(false);

	// fallback event listener for browser that didn't support popover api with early return for supported browser
	const handleMenuButtonClick = () => {
		if ("popover" in HTMLElement.prototype) {
			return;
		}

		setIsMenuOpen((prev) => !prev);
	};

	return (
		<>
			<header class="lg:hidden min-block-header-height flex items-center gap-4 px-fluid-300 border-be border-border">
				<SiteName />
				<ThemeToggle class="ms-auto" />
				<Button
					variant="secondary"
					popoverTarget="mobile-menu-panel"
					class="group block-11.5 inline-11.5 flex flex-col justify-center items-center gap-1 rounded-lg cursor-pointer shrink-0 squircle"
					aria-expanded={isMenuOpen()}
					aria-controls="mobile-menu-panel"
					aria-label={isMenuOpen() ? "Close menu" : "Open menu"}
					onclick={handleMenuButtonClick}>
					<span
						class="block-0.5 inline-3.5 bg-text group-[[aria-expanded='true']]:rotate-45 hamburger-transition-timing translate-y-0 group-[[aria-expanded='true']]:translate-y-1.5 pointer-events-none"
						aria-hidden="true"></span>
					<span
						class="block-0.5 inline-3.5 bg-text group-[[aria-expanded='true']]:opacity-0 hamburger-transition-timing translate-y-0 pointer-events-none"
						aria-hidden="true"></span>
					<span
						class="block-0.5 inline-3.5 bg-text group-[[aria-expanded='true']]:-rotate-45 hamburger-transition-timing translate-y-0 group-[[aria-expanded='true']]:-translate-y-1.5 pointer-events-none"
						aria-hidden="true"></span>
				</Button>
			</header>
			<MobileMenu open={isMenuOpen()} onToggle={setIsMenuOpen} />
		</>
	);
}
