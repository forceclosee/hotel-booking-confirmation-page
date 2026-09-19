import { useQuery } from "@tanstack/solid-query";
import { ErrorBoundary, Show, Suspense } from "solid-js";

import { classList } from "#/utils/class-helper";
import { getCassisHourlyWeather } from "#/utils/cassis-weather.functions";
import { getAverageDailyTemperature, getWeatherDetails } from "#/utils/weather";

import Button from "#/components/ui/Button";
import Skeleton from "#/components/ui/Skeleton";

type Props = {
	class?: string;
};

export default function WeatherWidget(props: Props) {
	return (
		<div
			class={classList(
				"scheme-light squircle relative grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 overflow-clip rounded-2xl bg-bg-weather px-4 py-2.5 text-text",
				props.class,
			)}>
			<ErrorBoundary
				fallback={(err, reset) => (
					<div class="min-block-[6.3115rem] flex flex-col items-center justify-center gap-4 text-center font-dm-sans">
						<p class="text-text-error">{err.message}</p>
						<Button
							class="squircle rounded-lg border-text-muted"
							onClick={() => reset()}>
							Try again
						</Button>
					</div>
				)}>
				<Suspense fallback={<WeatherWidgetSkeleton />}>
					<WeatherContent />
				</Suspense>
			</ErrorBoundary>
		</div>
	);
}

function WeatherContent() {
	const weatherQuery = useQuery(() => ({
		queryKey: ["weather"],
		queryFn: () => getCassisHourlyWeather(),
		staleTime: 60 * 60 * 1000, // 1 hour
		refetchOnWindowFocus: false,
		throwOnError: true,
	}));

	const averageTemperature = () =>
		getAverageDailyTemperature(weatherQuery.data?.hourly.temperature_2m) ?? "-";

	const temperatureUnit = () => weatherQuery.data?.hourly_units.temperature_2m;

	const weatherDetails = () =>
		getWeatherDetails(weatherQuery.data?.daily.weather_code[0]);

	return (
		<Show when={weatherQuery.data} fallback={<WeatherWidgetSkeleton />}>
			<span class="col-span-2 font-dm-mono text-2xs text-text-muted uppercase">
				Today in Cassis
			</span>

			<span class="text-3xl">
				{averageTemperature()}
				<Show when={averageTemperature() !== "-"}>{temperatureUnit()}</Show>
			</span>

			<img
				src={weatherDetails().image}
				alt={weatherDetails().description}
				class="inline-20 block-14 translate-x-4 object-cover drop-shadow-(--weather-icon-drop-shadow)"
				width={100}
				height={100}
			/>

			<span class="col-span-2 font-dm-sans text-[0.8125rem] text-text-muted">
				{weatherDetails().description}
			</span>
		</Show>
	);
}

// skeleton loader
function WeatherWidgetSkeleton() {
	return (
		<>
			<Skeleton width={115} height={18} class="mbs-1 col-span-2" />
			<Skeleton width={75} height={32} />
			<Skeleton variant="circle" height={52} />
			<Skeleton width={100} height={16} class="mbe-1 col-span-2" />
		</>
	);
}
