import SiteName from "#/components/shared/SiteName";
import FooterInfo from "#/components/shared/FooterInfo";
import ThemeToggle from "#/components/shared/ThemeToggle";
import WeatherWidget from "#/components/shared/WeatherWidget";
import NavLink from "#/components/shared/NavLink";

export default function DesktopSidebar() {
	return (
		<aside class="block-svh sticky inset-bs-0 hidden flex-col gap-4 overflow-auto border-border border-e px-4 py-5 lg:flex print:hidden">
			<SiteName class="pbe-4 border-be border-border ps-1.5" />
			<ThemeToggle isSidebar class="pbe-4 border-be border-border-muted" />
			<NavLink isDesktop />
			<WeatherWidget class="mbs-auto" />
			<FooterInfo />
		</aside>
	);
}
