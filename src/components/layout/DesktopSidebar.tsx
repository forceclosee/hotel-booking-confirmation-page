import SiteName from "#/components/shared/SiteName";
import FooterInfo from "#/components/shared/FooterInfo";
import ThemeToggle from "#/components/shared/ThemeToggle";
import WeatherWidget from "#/components/shared/WeatherWidget";
import NavLink from "#/components/shared/NavLink";

export default function DesktopSidebar() {
	return (
		<aside class="hidden block-svh sticky inset-bs-0 lg:flex flex-col gap-4 px-4 py-5 border-border border-e overflow-auto">
			<SiteName class="ps-1.5 border-be border-border pbe-4" />
			<ThemeToggle isSidebar class="border-be border-border-muted pbe-4" />
			<NavLink isDesktop />
			<WeatherWidget class="mbs-auto" />
			<FooterInfo />
		</aside>
	);
}
