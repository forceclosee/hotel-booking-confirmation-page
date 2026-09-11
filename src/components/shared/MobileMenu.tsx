import { createSignal, onCleanup, onMount } from "solid-js";
import { Portal } from "solid-js/web";

import createFocusTrap from "solid-focus-trap";
import createPreventScroll from "solid-prevent-scroll";

import WeatherWidget from "#/components/shared/WeatherWidget";
import FooterInfo from "#/components/shared/FooterInfo";

type Props = {
	open: boolean;
	onToggle: (open: boolean) => void;
};

export default function MobileMenu(props: Props) {
	const [mobileMenuRef, setMobileMenuRef] = createSignal<HTMLDivElement | null>(
		null,
	);

	// trap focus inside mobile menu
	createFocusTrap({
		element: mobileMenuRef,
		enabled: () => props.open,
	});

	// disable page scroll when mobile menu is open
	createPreventScroll({
		element: mobileMenuRef,
		enabled: () => props.open,
		preventScrollbarShift: false,
	});

	// synchronize popover state with signal
	const handleToggle = (event: ToggleEvent) => {
		const isPopoverOpen = event.newState === "open";

		props.onToggle(isPopoverOpen);
	};

	// close sidebar on desktop screen
	onMount(() => {
		const desktopScreen = window.matchMedia("(width >= 64rem)");

		const handleHidePopover = (event: MediaQueryListEvent) => {
			if (event.matches) {
				mobileMenuRef()?.hidePopover();
			}
		};

		desktopScreen?.addEventListener("change", handleHidePopover);

		onCleanup(() => {
			desktopScreen?.removeEventListener("change", handleHidePopover);
		});
	});

	return (
		<Portal>
			<div
				ref={setMobileMenuRef}
				id="mobile-menu-panel"
				popover
				class="block-[calc(100%_-_var(--spacing-header-height))] inline-full menu-transition inset-bs-header-height justify-center bg-bg-page [:popover-open]:flex"
				onToggle={handleToggle}>
				<div class="max-inline-[50rem] flex flex-col justify-end gap-4 px-fluid-300 py-4">
					<WeatherWidget />
					<FooterInfo />
				</div>
			</div>
		</Portal>
	);
}
