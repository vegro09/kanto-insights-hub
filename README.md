# Kanto Insights Hub

Act as a Supreme Frontend Architect and UI/UX Designer. Your explicit directive is to build a highly functional, production-ready React (Tailwind CSS) dashboard application named "Kanto News Auto".

You MUST strictly adhere to the "Kanto Empire Master Brand Constitution" provided below. Any deviation from these design rules is a critical failure.

[CHROMATIC COLOR SYSTEM (STRICT AXIOM)]

You are restricted to a strict primary color triad. DO NOT use gradients, drop shadows, neon colors, or glassmorphism.

1. Kanto Black: `#000000` (Use as the master canvas/main background).

2. Kanto Cream: `#F5F5DC` (Use for warm primary typographic tone and subtle accents).

3. Kanto White: `#FFFFFF` (Use for crisp illumination and primary text on black).

* Note: You may only use semantic tones (e.g., `#EF4444` for error, `#10B981` for success) strictly for active alerts or validation, NEVER for decorative styling.

[TYPOGRAPHY MATRIX]

- Logo/Brand Mark: Must be a pure wordmark reading "Kanto News Auto". It must be rendered in a Premium Serif Italic (use `Playfair Display Italic`, `Georgia Italic`, or a system serif italic). NO stretching, glow filters, or 3D embossing.

- UI/Body Text: Use `Inter` (or clean system sans-serif) for primary UI data displays and interface readability. 

- Layout Direction: Left-to-Right (LTR).

[UI ARCHETYPE: DYNAMIC FLAT UI]

- Corner Radius: Exactly `8px` (slightly rounded, never pill-bloated).

- Surfaces: Completely flat solid fills. Absolutely zero drop shadows (`shadow-none`).

- Borders: Crisp `1px` solid structural dividers. Use `#333333` for borders against the dark `#000000` background.

- Spacing: Utilize Fibonacci sequence proportions (1, 2, 3, 5, 8, 13, 21, 34, 55...) for padding, margins, and grid gaps where functionally possible.

[DASHBOARD LAYOUT & CORE FEATURES]

Build a responsive, flat-design dashboard with the following structure:

1. Left Sidebar (Control Center):

- Brand Header: "Kanto News Auto" (Serif Italic, White/Cream).

- Navigation Menu: "Radar", "Idea Vault", "Terminal Settings" (Use clean Lucide-react icons).

- Scan Parameters: 

  * Flat text input field for "Target Keywords" (border `#333333`, bg `#000000`).

  * Simple flat toggle switches for Data Sources: Reddit, X, App Stores.

- Primary Action: A full-width button reading "Initialize Scan Engine". Background `#F5F5DC` (Kanto Cream), Text `#000000` (Kanto Black), `8px` radius, flat (no shadow). 

2. Top Navbar:

- Live Status: A flat typographic status indicator (e.g., "Status: Online").

- Admin Profile: Display the user identifier "Canter". 

3. Main Content Area (The Feed):

- Top Row: 3 flat metric cards (Border `#333333`, Fill `#000000`). Metrics: "Complaints Parsed", "Ideas Extracted", "System Uptime".

- Idea Feed (CSS Grid): A grid layout displaying generated "Idea Cards".

[MOCK DATA & COMPONENT INSTRUCTIONS]

Do NOT render an empty state. Populate the Idea Feed with 4 realistic mock "Idea Cards". 

Each card must follow the Dynamic Flat UI archetype (`8px` radius, `1px` `#333333` border, black fill) and contain:

- Header: App/SaaS Idea Name (Bold, `#F5F5DC` Kanto Cream).

- Body: 

  * 'Core Problem' (text `#A3A3A3` or similar mid-gray, small text).

  * 'Proposed Solution' (text `#FFFFFF`, standard size).

- Footer: Action buttons (Save, Forward) rendered as flat icon buttons.

Generate the complete, error-free React code using Tailwind CSS, ensuring pure adherence to the Kanto simplicity, flat surfaces, and the Black/Cream/White chromatic triad.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/03ef563b-aedd-4185-bb0b-e7c86c294a7d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
