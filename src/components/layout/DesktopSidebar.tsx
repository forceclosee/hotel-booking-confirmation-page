import SiteName from "#/components/shared/SiteName";
import FooterInfo from "#/components/shared/FooterInfo";

export default function DesktopSidebar() {
	return (
		<aside class="hidden lg:block px-4 py-5 border-border border-e">
			<div class="ps-1.5 border-be border-border pbe-4">
				<SiteName />
			</div>
			<FooterInfo />
		</aside>
	);
}
