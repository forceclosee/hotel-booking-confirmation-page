import { cassisWeatherSchema } from "#/lib/schema/cassis-weather-schema";
import { createServerFn } from "@tanstack/solid-start";

class FetchError extends Error {}

export const getCassisHourlyWeather = createServerFn().handler(async () => {
	const url =
		"https://api.open-meteo.com/v1/forecast?latitude=43.2157&longitude=5.5385&daily=weather_code&hourly=temperature_2m&timezone=auto&forecast_days=1&timeformat=unixtime";

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new FetchError("Failed to fetch weather data");
		}

		const rawApiData = await response.json();
		const result = cassisWeatherSchema.safeParse(rawApiData);

		if (result.error) {
			throw new Error(result.error?.message);
		}

		const data = result.data;

		return data;
	} catch (error) {
		if (error instanceof FetchError) {
			throw new Error(error.message);
		} else {
			throw new Error("Something went wrong");
		}
	}
});
