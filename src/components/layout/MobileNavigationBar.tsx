import NavLink from "#/components/shared/NavLink";

export default function MobileNavigationBar() {
	return (
		<footer class="sticky inset-be-0 z-mobile-nav flex items-center justify-center border-border border-bs bg-bg-card px-fluid-300 py-1 lg:hidden print:hidden">
			<NavLink />
		</footer>
	);
}
