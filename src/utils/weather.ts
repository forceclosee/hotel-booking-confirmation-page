import { weatherInterpretations } from "#/data/weather-interpretations";

export function getAverageDailyTemperature(
	hourlyTemperature: number[] | undefined,
) {
	if (!hourlyTemperature || hourlyTemperature.length === 0) {
		return null;
	}

	const totalTemperature = hourlyTemperature.reduce(
		(accumulator, currentValue) => {
			return accumulator + currentValue;
		},
		0,
	);

	const averageTemperature = Math.round(
		totalTemperature / hourlyTemperature.length,
	);

	return averageTemperature;
}

export function getWeatherDetails(wmoCode: number | undefined) {
	// fallback if the wmo code is not on the weather interpretations list or undefined (scenario that should never happen, just in case)
	const fallback = {
		description: "Unknown weather",
		image:
			"https://res.cloudinary.com/dspqgpnvq/image/upload/v1789653357/unknown_opdlnr.png",
	};

	if (wmoCode !== undefined && wmoCode in weatherInterpretations) {
		return weatherInterpretations[wmoCode];
	} else {
		return fallback;
	}
}
