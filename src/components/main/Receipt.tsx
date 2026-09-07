import { classList } from "#/utils/class-helper";

type Props = {
	class?: string;
};

export default function Receipt(props: Props) {
	return (
		<div
			class={classList(
				"inline-full max-inline-[25rem] bg-bg-card px-5.5 rounded-[1.25rem] text-text -rotate-2 lg:-rotate-4 pbs-7 pbe-4",
				props.class,
			)}>
			<div class="grid grid-cols-[1fr_auto] font-dm-mono text-text-muted pbe-3.5">
				<span class="text-2xs uppercase">Receipt</span>
				<span class="justify-self-end text-xs">№ MS-2026</span>
				<h2 class="font-serif text-text text-xl mbs-2">Your stay</h2>
				<span class="justify-self-end text-xs">0421-AH</span>
			</div>

			<div class="grid grid-cols-2 py-4.5 border-border-muted border-y-2 border-dotted">
				<div class="justify-items-center grid">
					<span class="font-dm-mono text-2xs text-text-muted uppercase">
						Check in
					</span>
					<span class="font-medium text-3xl mbs-2">25 Apr</span>
					<span class="font-dm-sans text-[0.8125rem] text-text-muted mbs-0.5">
						Saturday · 15:00
					</span>
				</div>

				<div class="justify-items-center grid">
					<span class="font-dm-mono text-2xs text-text-muted uppercase">
						Check out
					</span>
					<span class="font-medium text-3xl mbs-2.5">29 Apr</span>
					<span class="font-dm-sans text-[0.8125rem] text-text-muted mbs-0.5">
						Wednesday · 11:00
					</span>
				</div>
			</div>

			<ul class="gap-1.5 grid border-be border-text pbs-2 pbe-5">
				<li class="flex justify-between">
					<span class="font-dm-sans text-[0.9rem]">
						Room · La Garrigue · 4 nights
					</span>
					<span class="text-[0.85rem] shrink-0">€ 620.00</span>
				</li>
				<li class="flex justify-between">
					<span class="font-dm-sans text-[0.9rem]">Breakfast · 2 guests</span>
					<span class="text-[0.85rem] shrink-0">€ 96.00</span>
				</li>
				<li class="flex justify-between">
					<span class="font-dm-sans text-[0.9rem] text-text/75">
						Tourist tax
					</span>
					<span class="text-[0.85rem] text-text/85 shrink-0">€ 14.40</span>
				</li>
			</ul>

			<div class="flex justify-between py-4.5">
				<span class="font-dm-mono text-text-muted text-sm uppercase tracking-wider">
					Total paid
				</span>
				<span class="text-2xl trim-capital">€ 730.40</span>
			</div>

			<div class="flex justify-between items-center mbs-2">
				<span class="font-dm-mono text-3xs text-text-muted uppercase tracking-wide">
					Paid · Wise · GBP
				</span>
				<svg
					class="bg-bg-card text-text scheme-light"
					xmlns="http://www.w3.org/2000/svg"
					width="93"
					height="28"
					fill="none"
					viewBox="0 0 93 28"
					aria-hidden="true">
					<g fill="#2b2620">
						<path d="M0 .121h3V28H0z" />
						<path d="M5 .115h2v27.879H5zm4-.019h4v27.879H9z" opacity=".78" />
						<path d="M15 .089h1v27.879h-1z" />
						<path d="M18 .108h3v27.879h-3zm5-.025h2v27.879h-2z" opacity=".78" />
						<path d="M27 .07h5v27.879h-5z" />
						<path d="M34 .057h2v27.879h-2zm4 .02h3v27.879h-3z" opacity=".78" />
						<path d="M43 .064h1v27.879h-1z" />
						<path d="M46 .051h4V27.93h-4zm6-.006h2v27.879h-2z" opacity=".78" />
						<path d="M56 .038h3v27.879h-3z" />
						<path d="M61 .032h5v27.879h-5zm7-.006h2v27.879h-2z" opacity=".78" />
						<path d="M72 .019h3v27.879h-3z" />
						<path d="M77 .013h1v27.879h-1zm3-.007h4v27.879h-4z" opacity=".78" />
						<path d="M86 0h2v27.879h-2z" />
						<path d="M90 .102h3v27.879h-3z" opacity=".78" />
					</g>
				</svg>
			</div>
		</div>
	);
}
