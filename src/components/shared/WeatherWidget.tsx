import { classList } from "#/utils/class-helper";
import { createUniqueId } from "solid-js";

type Props = {
	class?: string;
};

export default function WeatherWidget(props: Props) {
	const uniqueId = createUniqueId();
	const filterId = `weather-filter-${uniqueId}`;
	const gradientId = `weather-gradient-${uniqueId}`;

	return (
		<div
			class={classList(
				"scheme-light squircle relative grid gap-1 overflow-clip rounded-2xl bg-bg-weather px-4 py-2.5 text-text",
				props.class,
			)}>
			<span class="font-dm-mono text-2xs text-text-muted uppercase">
				Today in Cassis
			</span>
			<span class="text-3xl">27°</span>
			<span class="font-dm-sans text-[0.8125rem] text-text-muted">
				Sunny · light breeze
			</span>
			<svg
				class="absolute -inset-bs-[1.8rem] -inset-e-[1rem]"
				xmlns="http://www.w3.org/2000/svg"
				width="80"
				height="80"
				fill="none"
				viewBox="0 0 80 80"
				aria-hidden="true">
				<g filter={`url(#${filterId})`}>
					<rect width="80" height="80" fill={`url(#${gradientId})`} rx="40" />
				</g>
				<defs>
					<radialGradient
						id={gradientId}
						cx="0"
						cy="0"
						r="1"
						gradientTransform="translate(32 32)scale(67.8823)"
						gradientUnits="userSpaceOnUse">
						<stop stop-color="#ffde7a" />
						<stop offset=".7" stop-color="#edb63a" />
					</radialGradient>
					<filter
						id={filterId}
						width="80"
						height="80"
						x="0"
						y="0"
						color-interpolation-filters="sRGB"
						filterUnits="userSpaceOnUse">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feColorMatrix
							in="SourceAlpha"
							result="hardAlpha"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						/>
						<feOffset dx="-6" dy="-8" />
						<feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
						<feColorMatrix values="0 0 0 0 0.760784 0 0 0 0 0.352941 0 0 0 0 0.180392 0 0 0 0.18 0" />
						<feBlend in2="shape" result="effect1_innerShadow_84_350" />
					</filter>
				</defs>
			</svg>
		</div>
	);
}
