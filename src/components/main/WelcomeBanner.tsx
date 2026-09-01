import Button from "#/components/ui/Button";

export default function WelcomeBanner() {
	return (
		<section class="flex @min-3xl/main:flex-row flex-col gap-4.5">
			<div class="me-auto">
				<span class="font-dm-mono text-text-muted text-sm uppercase tracking-wider">
					Booking · Confirmed
				</span>
				<h1 class="mbs-3.5">
					Bienvenue, <span class="text-text-terracotta italic">Lucia.</span>
				</h1>
			</div>
			<div class="flex items-center self-center gap-4">
				<Button variant="secondary">Print receipt</Button>
				<Button class="trim-capital">Add to calendar</Button>
			</div>
		</section>
	);
}
