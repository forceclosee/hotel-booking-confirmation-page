import { classList } from "#/utils/class-helper";

type Props = {
	class?: string;
};

export default function Receipt(props: Props) {
	return (
		<div
			class={classList(
				"inline-full max-inline-[25rem] pbs-7 pbe-4 receipt print:scheme-light print:max-inline-none print:zoom-[0.8] -rotate-2 rounded-[1.25rem] bg-bg-card px-5.5 text-text lg:-rotate-4 print:rotate-0 print:rounded-none print:bg-transparent",
				props.class,
			)}>
			<div class="pbe-3.5 grid grid-cols-[1fr_auto] font-dm-mono text-text-muted">
				<span class="text-2xs uppercase">Receipt</span>
				<span class="justify-self-end text-xs">№ MS-2026</span>
				<h2 class="mbs-2 font-serif text-text text-xl">Your stay</h2>
				<span class="justify-self-end text-xs">0421-AH</span>
			</div>

			<div class="grid grid-cols-2 border-border-muted border-y-2 border-dotted py-4.5">
				<div class="grid justify-items-center">
					<span class="font-dm-mono text-2xs text-text-muted uppercase">
						Check in
					</span>
					<span class="mbs-2 font-medium text-3xl">25 Apr</span>
					<span class="mbs-0.5 font-dm-sans text-[0.8125rem] text-text-muted">
						Saturday · 15:00
					</span>
				</div>

				<div class="grid justify-items-center">
					<span class="font-dm-mono text-2xs text-text-muted uppercase">
						Check out
					</span>
					<span class="mbs-2.5 font-medium text-3xl">29 Apr</span>
					<span class="mbs-0.5 font-dm-sans text-[0.8125rem] text-text-muted">
						Wednesday · 11:00
					</span>
				</div>
			</div>

			<ul class="pbs-2 pbe-5 grid gap-1.5 border-be border-text">
				<li class="flex justify-between">
					<span class="font-dm-sans text-[0.9rem]">
						Room · La Garrigue · 4 nights
					</span>
					<span class="shrink-0 text-[0.85rem]">€ 620.00</span>
				</li>
				<li class="flex justify-between">
					<span class="font-dm-sans text-[0.9rem]">Breakfast · 2 guests</span>
					<span class="shrink-0 text-[0.85rem]">€ 96.00</span>
				</li>
				<li class="flex justify-between">
					<span class="font-dm-sans text-[0.9rem] text-text/75">
						Tourist tax
					</span>
					<span class="shrink-0 text-[0.85rem] text-text/85">€ 14.40</span>
				</li>
			</ul>

			<div class="flex justify-between py-4.5">
				<span class="font-dm-mono text-sm text-text-muted uppercase tracking-wider">
					Total paid
				</span>
				<span class="trim-capital text-2xl">€ 730.40</span>
			</div>

			<div class="mbs-2 flex items-center justify-between">
				<span class="font-dm-mono text-3xs text-text-muted uppercase tracking-wide">
					Paid · Wise · GBP
				</span>
				<svg
					class="scheme-light bg-bg-card text-text"
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
