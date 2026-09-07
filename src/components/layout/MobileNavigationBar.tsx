import NavLink from "#/components/shared/NavLink";

export default function MobileNavigationBar() {
	return (
		<footer class="lg:hidden z-mobile-nav sticky inset-be-0 flex justify-center items-center bg-bg-card px-fluid-300 py-1 border-border border-bs">
			<NavLink />
		</footer>
	);
}
