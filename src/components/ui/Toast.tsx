import { Show } from "solid-js/web";
import type { JSX } from "solid-js/jsx-runtime";

import { Toast, toaster } from "@kobalte/core/toast";
import { BadgeCheck, X } from "lucide-solid";

import { classList } from "#/utils/class-helper";

type Content = {
	title: string;
	description?: string;
};

function show(content: Content) {
	return toaster.show((props) => (
		<Toast
			toastId={props.toastId}
			class="toast squircle min-inline-60 data-opened:show-toast! data-closed:hide-toast! data-[swipe=end]:swipe-out! grid gap-2 rounded-xl bg-bg-info px-4 py-3 font-dm-sans text-text-inverse data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-(--kb-toast-swipe-move-x) data-[swipe=cancel]:transition-transform data-[swipe=cancel]:duration-200 data-[swipe=cancel]:ease-out">
			<div class="grid gap-1">
				<div class="flex justify-between gap-4">
					<Toast.Title class="flex items-center gap-2">
						<BadgeCheck strokeWidth={2.5} class="inline-[1em]" />
						<span class="font-medium">{content.title}</span>
					</Toast.Title>

					<Toast.CloseButton class="shrink-0 cursor-pointer">
						<X class="inline-5" />
					</Toast.CloseButton>
				</div>

				<Show when={content.description}>
					<Toast.Description class="text-text-inverse-muted">
						{content.description}
					</Toast.Description>
				</Show>
			</div>

			<Toast.ProgressTrack class="block-2 inline-full rounded-full bg-bg-gray">
				<Toast.ProgressFill class="block-full inline-(--kb-toast-progress-fill-width) rounded-full bg-text-terracotta" />
			</Toast.ProgressTrack>
		</Toast>
	));
}

function success(content: Content) {
	return toaster.show((props) => (
		<Toast
			toastId={props.toastId}
			class="toast squircle min-inline-60 data-opened:show-toast! data-closed:hide-toast! data-[swipe=end]:swipe-out! grid gap-2 rounded-xl bg-bg-success px-4 py-3 font-dm-sans text-text-inverse data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-(--kb-toast-swipe-move-x) data-[swipe=cancel]:transition-transform data-[swipe=cancel]:duration-200 data-[swipe=cancel]:ease-out">
			<div class="grid gap-1">
				<div class="flex justify-between gap-4">
					<Toast.Title class="flex items-center gap-2">
						<BadgeCheck strokeWidth={2.5} class="inline-[1em]" />
						<span class="font-medium">{content.title}</span>
					</Toast.Title>

					<Toast.CloseButton class="shrink-0 cursor-pointer">
						<X class="inline-5" />
					</Toast.CloseButton>
				</div>

				<Show when={content.description}>
					<Toast.Description class="text-text-inverse-muted">
						{content.description}
					</Toast.Description>
				</Show>
			</div>

			<Toast.ProgressTrack class="block-2 inline-full rounded-full bg-bg-gray">
				<Toast.ProgressFill class="block-full inline-(--kb-toast-progress-fill-width) rounded-full bg-text-terracotta" />
			</Toast.ProgressTrack>
		</Toast>
	));
}

function error(content: Content) {
	return toaster.show((props) => (
		<Toast
			toastId={props.toastId}
			class="toast squircle min-inline-60 data-opened:show-toast! data-closed:hide-toast! data-[swipe=end]:swipe-out! grid gap-2 rounded-xl bg-bg-error px-4 py-3 font-dm-sans text-text-inverse data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-(--kb-toast-swipe-move-x) data-[swipe=cancel]:transition-transform data-[swipe=cancel]:duration-200 data-[swipe=cancel]:ease-out">
			<div class="grid gap-1">
				<div class="flex justify-between gap-4">
					<Toast.Title class="flex items-center gap-2">
						<BadgeCheck strokeWidth={2.5} class="inline-[1em]" />
						<span class="font-medium">{content.title}</span>
					</Toast.Title>

					<Toast.CloseButton class="shrink-0 cursor-pointer">
						<X class="inline-5" />
					</Toast.CloseButton>
				</div>

				<Show when={content.description}>
					<Toast.Description class="text-text-inverse-muted">
						{content.description}
					</Toast.Description>
				</Show>
			</div>

			<Toast.ProgressTrack class="block-2 inline-full rounded-full bg-bg-gray">
				<Toast.ProgressFill class="block-full inline-(--kb-toast-progress-fill-width) rounded-full bg-text-terracotta" />
			</Toast.ProgressTrack>
		</Toast>
	));
}

function promise<T, U>(
	promise: Promise<T> | (() => Promise<T>),
	options: {
		loading?: Content;
		success?: (data: T) => Content;
		error?: (error: U) => Content;
	},
) {
	return toaster.promise(promise, (props) => {
		const title = () => {
			if (props.state === "pending") return options.loading?.title;
			if (props.state === "fulfilled" && props.data !== undefined)
				return options.success?.(props.data)?.title;
			if (props.state === "rejected" && props.error !== undefined)
				return options.error?.(props.error)?.title;
			return undefined;
		};

		const description = () => {
			if (props.state === "pending") return options.loading?.description;
			if (props.state === "fulfilled" && props.data !== undefined)
				return options.success?.(props.data)?.description;
			if (props.state === "rejected" && props.error !== undefined)
				return options.error?.(props.error)?.description;
		};

		return (
			<Toast
				toastId={props.toastId}
				class={classList(
					"toast squircle min-inline-60 data-opened:show-toast! data-closed:hide-toast! data-[swipe=end]:swipe-out! grid gap-2 rounded-xl px-4 py-3 font-dm-sans text-text-inverse data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-(--kb-toast-swipe-move-x) data-[swipe=cancel]:transition-transform data-[swipe=cancel]:duration-200 data-[swipe=cancel]:ease-out",
					{ "bg-bg-info": props.state === "pending" },
					{ "bg-bg-success": props.state === "fulfilled" },
					{ "bg-bg-error": props.state === "rejected" },
				)}>
				<div class="grid gap-1">
					<div class="flex justify-between gap-4">
						<Toast.Title class="flex items-center gap-2">
							<BadgeCheck strokeWidth={2.5} class="inline-[1em]" />
							<span class="font-medium">{title()}</span>
						</Toast.Title>

						<Toast.CloseButton class="shrink-0 cursor-pointer">
							<X class="inline-5" />
						</Toast.CloseButton>
					</div>

					<Show when={description()}>
						<Toast.Description class="text-text-inverse-muted">
							{description()}
						</Toast.Description>
					</Show>
				</div>

				<Toast.ProgressTrack class="block-2 inline-full rounded-full bg-bg-gray">
					<Toast.ProgressFill class="block-full inline-(--kb-toast-progress-fill-width) rounded-full bg-text-terracotta" />
				</Toast.ProgressTrack>
			</Toast>
		);
	});
}

function custom(jsx: () => JSX.Element) {
	return toaster.show((props) => (
		<Toast toastId={props.toastId}>{jsx()}</Toast>
	));
}

function dismiss(id: number) {
	return toaster.dismiss(id);
}

export const toast = {
	show,
	success,
	error,
	promise,
	custom,
	dismiss,
};
