import { createSignal } from "solid-js";
import { DropdownMenu } from "@kobalte/core/dropdown-menu";
import { Link } from "@tanstack/solid-router";

import createPreventScroll from "solid-prevent-scroll";

import {
	getGoogleCalendarUrl,
	getOutlookCalendarUrl,
	downloadIcs,
} from "#/utils/calendar";
import { classList } from "#/utils/class-helper";

import GoogleCalendarIcon from "#/icon/google-calendar.svg?solid";
import OutlookCalendarIcon from "#/icon/outlook.svg?solid";

import Button from "#/components/ui/Button";
import { toast } from "#/components/ui/Toast";
import { CalendarDays } from "lucide-solid";

type Props = {
	class?: string;
};

export default function WelcomeBanner(props: Props) {
	const [open, setOpen] = createSignal(false);

	const [dropdownRef, setDropdownRef] = createSignal<HTMLDivElement | null>(
		null,
	);

	const handleAddToCalendar = async () => {
		try {
			const { fileName, file, message } = await downloadIcs();

			const url = URL.createObjectURL(file);

			const anchor = document.createElement("a");
			anchor.href = url;
			anchor.download = fileName;

			document.body.appendChild(anchor);
			anchor.click();
			document.body.removeChild(anchor);

			setTimeout(() => {
				URL.revokeObjectURL(url);
			}, 1000);

			toast.success({
				title: message,
			});
		} catch {
			toast.error({ title: "Failed to create calendar events" });
		}
	};

	// disable page scroll when dropdown is open
	createPreventScroll({
		element: dropdownRef,
		enabled: () => open(),
		preventScrollbarShift: false,
	});

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
				<Button variant="secondary" onClick={() => window.print()}>
					Print receipt
				</Button>

				<DropdownMenu
					ref={setDropdownRef}
					gutter={5}
					open={open()}
					placement="bottom-end"
					onOpenChange={setOpen}
					preventScroll={false}>
					<DropdownMenu.Trigger as={Button} class="trim-capital">
						Add to calendar
					</DropdownMenu.Trigger>
					<DropdownMenu.Portal>
						<DropdownMenu.Content class="z-dropdown grid cursor-pointer gap-1 rounded-xl border border-border-muted bg-bg-card p-2 font-dm-sans text-text-muted">
							<DropdownMenu.Item
								as={Link}
								to={getGoogleCalendarUrl()}
								class="squircle rounded-xl p-2 transition-colors duration-200 hover:bg-bg-gray hover:text-text focus-visible:bg-bg-gray focus-visible:text-text"
								target="_blank"
								rel="noopener noreferrer">
								<DropdownMenu.ItemLabel class="flex items-center gap-2.5">
									<GoogleCalendarIcon class="inline-[1.3em]" />
									<span>Google Calendar</span>
								</DropdownMenu.ItemLabel>
							</DropdownMenu.Item>

							<DropdownMenu.Item
								as={Link}
								to={getOutlookCalendarUrl()}
								class="squircle rounded-xl p-2 transition-colors duration-200 hover:bg-bg-gray hover:text-text focus-visible:bg-bg-gray focus-visible:text-text"
								target="_blank"
								rel="noopener noreferrer">
								<DropdownMenu.ItemLabel class="flex items-center gap-2.5">
									<OutlookCalendarIcon class="inline-[1.3em]" />
									<span>Outlook</span>
								</DropdownMenu.ItemLabel>
							</DropdownMenu.Item>

							<DropdownMenu.Item
								as="button"
								onClick={handleAddToCalendar}
								class="squircle cursor-pointer rounded-xl p-2 transition-colors duration-200 hover:bg-bg-gray hover:text-text focus-visible:bg-bg-gray focus-visible:text-text">
								<DropdownMenu.ItemLabel
									as="span"
									class="flex items-center gap-2.5">
									<CalendarDays class="inline-[1.3em]" />
									<span>Other (download ics file)</span>
								</DropdownMenu.ItemLabel>
							</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Portal>
				</DropdownMenu>
			</div>
		</section>
	);
}
