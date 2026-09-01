import SiteName from "#/components/shared/SiteName";
import FooterInfo from "#/components/shared/FooterInfo";
import ThemeToggle from "#/components/shared/ThemeToggle";

export default function DesktopSidebar() {
	return (
		<aside class="hidden lg:block px-4 py-5 border-border border-e">
			<SiteName class="ps-1.5 border-be border-border pbe-4" />
			<ThemeToggle class="my-4" />
			<FooterInfo />
		</aside>
	);
}
