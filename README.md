# Frontend Mentor - Hotel booking confirmation page

This is a solution to the [Hotel booking confirmation page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/hotel-booking-confirmation-page).

A responsive hotel booking confirmation page built with SolidJS and TanStack Start. It pairs a branded sidebar with a stacked receipt card, host welcome card, and arrival / Wi-Fi / breakfast details, plus a _print-friendly_ receipt, _one-click_ **add to calendar**, and a live weather widget for the host city.

<div align="center">
  <a href="https://tanstack.com/start/latest">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/badge/Tanstack%20Start.svg?theme=green&amp;logo=tanstack&amp;mode=dark">
      <img alt="badge" src="https://shieldcn.dev/badge/Tanstack%20Start.svg?theme=green&amp;logo=tanstack&amp;mode=light">
    </picture>
  </a>
  <a href="https://www.solidjs.com/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/badge/Solid.svg?theme=blue&amp;logo=solid&amp;mode=dark">
      <img alt="badge" src="https://shieldcn.dev/badge/Solid.svg?theme=blue&amp;logo=solid&amp;mode=light">
    </picture>
  </a>
  <a href="https://www.typescriptlang.org/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/badge/TypeScript.svg?brand=typescript&amp;mode=dark">
      <img alt="TypeScript" src="https://shieldcn.dev/badge/TypeScript.svg?brand=typescript&amp;mode=light">
    </picture>
  </a>
  <a href="https://tailwindcss.com/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/badge/Tailwind%20CSS.svg?brand=tailwindcss&amp;mode=dark">
      <img alt="Tailwind CSS" src="https://shieldcn.dev/badge/Tailwind%20CSS.svg?brand=tailwindcss&amp;mode=light">
    </picture>
  </a>
</div>

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Links](#links)
- [Tech Stack](#tech-stack)
- [Tools & Resources](#tools--resources)
- [Run Locally](#run-locally)
- [Scripts](#scripts)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## Features

- **Print receipt** - opens the browser print dialog with a clean, card-only print layout
- **Add to calendar** - exports the stay to Google Calendar, Outlook, or as a downloadable `.ics` file
- **Copy Wi-Fi password** - clipboard button with tooltip feedback and toast confirmation
- **Theme toggle** - light / dark / system, persisted to `localStorage`
- **Responsive navigation** - desktop sidebar collapses into an accessible hamburger menu (focus-trapped, scroll-locked) on smaller screens
- **Fan-out hover animation** - the receipt and welcome cards tilt apart on hover
- **Live weather widget** - **Today in Cassis** forecast from Open-Meteo, validated with Zod, fetched through a TanStack Start server function, with skeleton loaders
- **Toast notifications** - loading, success, and error states built on Kobalte

## Screenshots

- Mobile

<!-- isi screenshot -->

- Tablet

<!-- isi screenshot -->

- Desktop

<!-- isi screenshot -->

## Links

- Solution URL: [solution URL](https://your-solution-url.com) <!-- ganti link -->
- Live Site URL: [live site URL](https://your-live-site-url.com) <!-- ganti link -->

## Tech Stack

- **TanStack Start**
- **TanStack Router**
- **SolidJS**
- **Vite**
- **TypeScript**
- **TanStack Query** - data fetching
- **Kobalte** - accessible headless UI (buttoon, dropdowns, tooltips, toasts)
- **Tailwind CSS v4**
- **Fontsource** - self-hosted variable fonts (DM Sans, Fraunces, DM Mono)
- **Biome** - linting and formatting
- **Cloudflare Workers** - deployment

## Tools & Resources

- [TinyPNG](https://tinypng.com/) - image compression
- [Cloudinary](https://cloudinary.com/) - image hosting for weather icon and og image
- [Perfect Pixel](https://www.welldonecode.com/perfectpixel/) - _pixel-perfect_ design overlay
- [Fluid Typography Calculator](https://royalfig.github.io/fluid-typography-calculator/) - fluid typography calculator

## Run Locally

1. Clone the project

   ```bash
     git clone https://github.com/forceclosee/hotel-booking-confirmation-page.git
   ```

2. Go to the project directory

   ```bash
     cd hotel-booking-confirmation-page
   ```

3. Install dependencies

   ```bash
     npm install
   ```

4. Start the dev server

   ```bash
     npm run dev
   ```

## Scripts

| Command          | Description                       |
| ---------------- | --------------------------------- |
| `npm run dev`    | Start the dev server on port 3000 |
| `npm run build`  | Build for production              |
| `npm run start`  | Serve the built output            |
| `npm run check`  | Lint and format (Biome)           |
| `npm run fix`    | Apply safe fix (Biome)            |
| `npm run deploy` | Build and deploy to Cloudflare    |

## My process

### What I learned

While working on this project I learned how to fetch and validate data from a real API, and how headless UI components can handle accessibility for you.

<details>
  <summary><strong>Fetching data from an API</strong></summary>

The weather widget was my first real end-to-end data flow, and it showed me how server functions, runtime validation, and query caching fit together. The Open-Meteo forecast is fetched on the server through a TanStack Start `createServerFn`, validated at runtime with a Zod schema, then rendered on the client through a TanStack Query `useQuery`:

```ts
// src/utils/cassis-weather.functions.ts

export const getCassisHourlyWeather = createServerFn().handler(async () => {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=43.2157&longitude=5.5385&daily=weather_code&hourly=temperature_2m&timezone=auto&forecast_days=1&timeformat=unixtime";

  const response = await fetch(url);
  const rawApiData = await response.json();
  const result = cassisWeatherSchema.safeParse(rawApiData);

  return result.data;
});
```

</details>

<details>
<summary><strong>Building accessible UI with Kobalte</strong></summary>

Kobalte was the big new tool for this project - headless components gave me keyboard navigation, ARIA attributes, and focus management without me manually dealing with it. Kobalte's primitives (`DropdownMenu`, `Tooltip`, `Toast`) handle the hard accessibility work and I only styled the composition and wired up a few props:

```tsx
// src/components/shared/ThemeToggle.tsx

<DropdownMenu open={open()} onOpenChange={setOpen}>
  <DropdownMenu.Trigger>Theme: {theme()}</DropdownMenu.Trigger>
  <DropdownMenu.Portal>
    <DropdownMenu.Content>
      <DropdownMenu.Item onSelect={() => handleSelect("light")}>
        Light
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu>
```

</details>

### AI Collaboration

During this project, I also collaborated with AI (opencode) to streamline parts of my development workflow.

<details>
<summary><strong>Analyze changes and create commit message</strong></summary>

Before committing, I reviewed the diff and asked the AI to summarize what changed and craft a concise commit message, which helped me stay consistent with message conventions.

</details>

<details>
<summary><strong>Create readme</strong></summary>

To keep documentation up to date, I worked together with the AI to build and refine this README based on the actual codebase.

</details>

## Authors

- GitHub - [Force Close](https://github.com/forceclosee)
- Frontend Mentor - [@forceclosee](https://www.frontendmentor.io/profile/forceclosee)
- X - [@forceclosee](https://x.com/forceclosee)

## Acknowledgements

- Weather forecast by [Open Meteo](https://open-meteo.com/)
- Weather icon from [Open Weather](https://openweathermap.org/api/weather-conditions) with [mapping from WMO code](https://gist.github.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c) by [Leo Ueno](https://github.com/stellasphere)
- Construction illustration from [Vecteezy](https://www.vecteezy.com/free-vector/page-under-construction)
