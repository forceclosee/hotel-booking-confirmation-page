import { createFileRoute } from "@tanstack/solid-router";

import { Sun } from "lucide-solid";
import SparkleIcon from "#/icon/icon-sparkle.svg?solid";

import WelcomeBanner from "#/components/main/WelcomeBanner";
import WelcomeCard from "#/components/main/WelcomeCard";
import Receipt from "#/components/main/Receipt";
import ArrivalCard from "#/components/main/ArrivalCard";
import BreakfastCard from "#/components/main/BreakfastCard";
import WifiCard from "#/components/main/WifiCard";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main class="@container/main inline-full max-inline-[50rem] lg:max-inline-full justify-self-center content-start gap-15.5 grid px-fluid-300 py-fluid-200">
			<WelcomeBanner class="@min-4xl/main:flex-row flex-col" />

			<div class="relative flex flex-col items-center gap-3 overflow-x-clip">
				<div class="group peer items-center grid @min-4xl/main:grid-cols-2 px-2 cursor-pointer">
					<WelcomeCard class="z-[calc(var(--z-card)_+_1)] @min-4xl/main:order-1 @min-4xl/main:motion-safe:group-hover:-rotate-5 @min-4xl/main:motion-safe:transition-transform @min-4xl/main:motion-safe:group-hover:translate-x-22 @min-4xl/main:motion-safe:duration-500" />
					<Receipt class="z-card @min-4xl/main:motion-safe:group-hover:rotate-5 @min-4xl/main:motion-safe:transition-transform @min-4xl/main:motion-safe:group-hover:-translate-x-22 @min-4xl/main:motion-safe:duration-500" />
				</div>

				<Sun
					strokeWidth={1}
					class="hidden block-auto @min-4xl/main:motion-safe:peer-hover:block inline-44 absolute inset-0 row-span-2 opacity-0 @min-4xl/main:motion-safe:starting:opacity-0 @min-4xl/main:motion-safe:peer-hover:opacity-100 fill-bg-weather stroke-text-terracotta m-auto @min-4xl/main:motion-safe:transition-all @min-4xl/main:motion-safe:transition-discrete @min-4xl/main:motion-safe:duration-700"
				/>

				<div class="hidden @min-4xl/main:motion-safe:flex items-center gap-2">
					<SparkleIcon class="text-text-terracotta" />
					<span class="font-dm-mono text-[0.625rem] text-text-muted uppercase tracking-widest">
						hover to fan
					</span>
					<SparkleIcon class="text-text-terracotta" />
				</div>
			</div>

			<div class="justify-self-center gap-6 grid @min-[45rem]/main:grid-cols-2 @min-[66rem]/main:grid-cols-3">
				<ArrivalCard />
				<WifiCard />
				<BreakfastCard />
			</div>
		</main>
	);
}
