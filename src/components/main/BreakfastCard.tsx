import BreakfastIcon from "#/icon/icon-breakfast.svg?solid";

import Card from "#/components/ui/Card";

export default function BreakfastCard() {
	return (
		<Card
			icon={BreakfastIcon}
			label="Breakfast"
			number="03"
			title="Served 8 - 10:30"
			subtitle="On the terrace">
			<p>
				Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free
				option? Leave a note the night before.
			</p>
		</Card>
	);
}
