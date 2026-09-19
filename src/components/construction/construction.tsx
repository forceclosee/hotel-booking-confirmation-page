import websiteUnderConstruction from "#/image/website-under-construction.jpg";

export default function Construction() {
	return (
		<div class="block-full flex flex-col items-center justify-center gap-10 px-fluid-300 py-fluid-200 font-dm-sans">
			<div class="grid justify-items-center gap-4">
				<img
					src={websiteUnderConstruction}
					alt="website under construction"
					width={1920}
					height={1005}
					class="max-inline-[40rem] opacity-60"
				/>
				<a
					href="https://www.vecteezy.com/free-vector/page-under-construction"
					class="hover-underline-2 pbe-1 text-3xs text-text-muted">
					Page Under Construction Vectors by Vecteezy
				</a>
			</div>
			<h1>Page Under Construction</h1>
		</div>
	);
}
