import { createEvent, type EventAttributes } from "ics";

const title = encodeURIComponent("Stay at Maison Soleil");
const details = encodeURIComponent("Maison Soleil - Room La Garrigue");
const location = encodeURIComponent(
	"Maison Soleil, 12 Rue des Oliviers, Cassis",
);

export function getGoogleCalendarUrl() {
	const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
	const dates = "20270425T130000Z/20270429T090000Z";

	const googleCalendarUrl = `${base}&text=${title}&dates=${dates}&details=${details}&location=${location}`;
	return googleCalendarUrl;
}

export function getOutlookCalendarUrl() {
	const base =
		"https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent";
	const startDates = "2027-04-25T13:00:00Z";
	const endDates = "2027-04-29T09:00:00Z";

	const outlookCalendarUrl = `${base}&subject=${title}&startdt=${startDates}&enddt=${endDates}&body=${details}&location=${location}`;
	return outlookCalendarUrl;
}

export async function downloadIcs() {
	const event: EventAttributes = {
		start: [2027, 4, 25, 13, 0],
		duration: { days: 4 },
		title: title,
		description: details,
		location: location,
		status: "CONFIRMED",
		busyStatus: "BUSY",
	};

	const fileName = "maison-soleil-stay.ics";
	const file: Blob = await new Promise((resolve, reject) => {
		createEvent(event, (error, value) => {
			if (error) {
				reject(error);
				return;
			}

			resolve(new File([value], fileName, { type: "text/calendar" }));
		});
	});

	const message = "Calendar event created";

	return { fileName, file, message };
}
