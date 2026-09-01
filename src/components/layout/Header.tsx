import SiteName from "#/components/shared/SiteName";
import ThemeToggle from "#/components/shared/ThemeToggle";

export default function Header() {
	return (
		<header class="lg:hidden flex gap-4 px-fluid-300 py-3.5 border-be border-border">
			<SiteName />
			<ThemeToggle class="ms-auto" />
		</header>
	);
}
