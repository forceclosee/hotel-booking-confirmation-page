import { createSignal, Show } from "solid-js";
import { Tooltip } from "@kobalte/core/tooltip";

import { ClipboardCheck, Copy } from "lucide-solid";
import WifiIcon from "#/icon/icon-wifi.svg?solid";

import Card from "#/components/ui/Card";
import Button from "#/components/ui/Button";

export default function WifiCard() {
	let inputRef!: HTMLInputElement;

	const [copied, setCopied] = createSignal(false);

	const handleCopyPassword = () => {
		navigator.clipboard.writeText(inputRef.value);

		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	return (
		<Card
			icon={WifiIcon}
			label="Wifi"
			number="02"
			title="Le Soleil · Guest"
			subtitle="Password below">
			<div class="gap-1 grid">
				<div class="min-block-8 flex justify-between items-center bg-bg-gray px-2 rounded-xl squircle">
					<label
						for="network"
						class="font-dm-mono text-text-muted text-sm uppercase tracking-wider trim-capital">
						Network
					</label>
					<input
						type="text"
						id="network"
						class="font-dm-sans text-[0.8125rem] text-end"
						name="network"
						value="Le Soleil · Guest"
						readOnly
					/>
				</div>

				<div class="min-block-8 flex items-center gap-2.5 bg-bg-gray px-2 rounded-xl squircle">
					<label
						for="password"
						class="font-dm-mono text-text-muted text-sm uppercase tracking-wider trim-capital">
						Password
					</label>
					<input
						ref={inputRef}
						type="text"
						id="password"
						class="ms-auto font-dm-sans text-[0.8125rem] text-end"
						name="password"
						value="soleil-2026"
						readOnly
					/>

					<div>
						<Tooltip placement="top" openDelay={200} closeDelay={200}>
							<Tooltip.Trigger
								as={Button}
								variant="secondary"
								class="min-block-0 p-1 border-text-muted/20 rounded-xl squircle"
								aria-label="Copy password"
								disabled={copied()}
								onClick={handleCopyPassword}>
								<Show
									when={copied()}
									fallback={<Copy class="block-[1.2em] inline-[1.2em]" />}>
									<ClipboardCheck class="block-[1.2em] inline-[1.2em]" />
								</Show>
							</Tooltip.Trigger>

							<Tooltip.Portal>
								<Tooltip.Content class="bg-bg-tooltip rounded-lg squircle data-[expanded]:show-tooltip hide-tooltip">
									<Tooltip.Arrow size={20} />
									<span class="block p-2 font-dm-sans font-medium text-text-inverse text-xs trim-text">
										Copy password
									</span>
								</Tooltip.Content>
							</Tooltip.Portal>
						</Tooltip>
					</div>
				</div>
			</div>
		</Card>
	);
}
