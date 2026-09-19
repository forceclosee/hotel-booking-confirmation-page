import { z } from "zod";

export const cassisWeatherSchema = z.object({
	latitude: z.number(),
	longitude: z.number(),
	generationtime_ms: z.number(),
	utc_offset_seconds: z.number(),
	timezone: z.string(),
	timezone_abbreviation: z.string(),
	elevation: z.number(),
	hourly_units: z.object({
		time: z.string(),
		temperature_2m: z.string(),
	}),
	hourly: z.object({
		time: z.array(z.number()),
		temperature_2m: z.array(z.number()),
	}),
	daily_units: z.object({
		time: z.string(),
		weather_code: z.string(),
	}),
	daily: z.object({
		time: z.array(z.number()),
		weather_code: z.array(z.number()),
	}),
});

export type CassisWeather = z.infer<typeof cassisWeatherSchema>;
