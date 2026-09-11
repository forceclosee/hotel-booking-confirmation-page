import { createSignal, Show } from "solid-js";
import { Tooltip } from "@kobalte/core/tooltip";

import { toast } from "#/components/ui/Toast";

import { ClipboardCheck, Copy } from "lucide-solid";
import WifiIcon from "#/icon/icon-wifi.svg?solid";

import Card from "#/components/ui/Card";
import Button from "#/components/ui/Button";

export default function WifiCard() {
	const [copied, setCopied] = createSignal(false);

	let inputRef: HTMLInputElement | undefined;

	const copyPassword = async () => {
		try {
			if (!inputRef) {
				throw new Error("Password Input is missing");
			}

			if (!navigator.clipboard || !navigator.clipboard.writeText) {
				throw new Error("Clipboard API is not supported");
			}

			await navigator.clipboard.writeText(inputRef.value);
			return { success: true, message: "Password copied" };
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(error.message);
			} else {
				throw new Error("Something went wrong, Please try again");
			}
		}
	};

	const handleCopyPassword = async () => {
		await copyPassword();

		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2000);

		toast.promise(copyPassword, {
			success: (data) => {
				return { title: data.message };
			},

			error: (error) => {
				return {
					title: "Failed to copy password",
					description:
						error instanceof Error
							? error.message
							: "Something went wrong, Please try again",
				};
			},
		});
	};

	return (
		<Card
			icon={WifiIcon}
			label="Wifi"
			number="02"
			title="Le Soleil · Guest"
			subtitle="Password below">
			<div class="grid gap-1">
				<div class="min-block-8 squircle flex items-center justify-between rounded-xl bg-bg-gray px-2">
					<label
						for="network"
						class="trim-capital font-dm-mono text-sm text-text-muted uppercase tracking-wider">
						Network
					</label>
					<input
						type="text"
						id="network"
						class="text-end font-dm-sans text-[0.8125rem]"
						name="network"
						value="Le Soleil · Guest"
						readOnly
					/>
				</div>

				<div class="min-block-8 squircle flex items-center gap-2.5 rounded-xl bg-bg-gray px-2">
					<label
						for="password"
						class="trim-capital font-dm-mono text-sm text-text-muted uppercase tracking-wider">
						Password
					</label>
					<input
						ref={inputRef}
						type="text"
						id="password"
						class="ms-auto text-end font-dm-sans text-[0.8125rem]"
						name="password"
						value="soleil-2026"
						readOnly
					/>

					<div>
						<Tooltip placement="top" openDelay={200} closeDelay={200}>
							<Tooltip.Trigger
								as={Button}
								variant="secondary"
								class="min-block-0 squircle rounded-xl border-text-muted/20 p-1"
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
								<Tooltip.Content class="squircle data-expanded:show-tooltip hide-tooltip rounded-lg bg-bg-info">
									<Tooltip.Arrow size={20} />
									<span class="trim-text block p-2 font-dm-sans font-medium text-text-inverse text-xs">
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
