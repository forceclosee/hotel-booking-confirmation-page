import KeyIcon from "#/icon/icon-key.svg?solid";

import Card from "#/components/ui/Card";

export default function ArrivalCard() {
	return (
		<Card
			icon={KeyIcon}
			label="Arrival"
			number="01"
			title="Check-in from 15:00"
			subtitle="Sat, 25 April">
			<p>
				Ring the brass bell by the blue door. If we're at the market, the key is
				in the terracotta pot by the olive tree.
			</p>
		</Card>
	);
}
