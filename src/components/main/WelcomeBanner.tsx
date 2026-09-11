import Button from "#/components/ui/Button";
import { classList } from "#/utils/class-helper";

type Props = {
	class?: string;
};

export default function WelcomeBanner(props: Props) {
	return (
		<section class={classList("flex gap-4.5", props.class)}>
			<div class="me-auto">
				<span class="font-dm-mono text-sm text-text-muted uppercase tracking-wider">
					Booking · Confirmed
				</span>
				<h1 class="mbs-3.5">
					Bienvenue, <span class="text-text-terracotta italic">Lucia.</span>
				</h1>
			</div>
			<div class="flex items-center gap-4 self-center">
				<Button variant="secondary">Print receipt</Button>
				<Button class="trim-capital">Add to calendar</Button>
			</div>
		</section>
	);
}
