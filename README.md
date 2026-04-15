# LendHub Technical Interview Skeleton

This is a scaffold project for LendHub technical interviews. It provides a bare-bones Next.js setup with TypeScript and Tailwind CSS, along with LendHub's brand colors pre-configured.

## Getting Started

### Installation

First, install the dependencies:

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Packages Installed

### Dependencies

- **next** (^14.2.0) - React framework with App Router
- **react** (^18.3.0) - React library
- **react-dom** (^18.3.0) - React DOM library

### Dev Dependencies

- **typescript** (^5.4.0) - TypeScript language support
- **@types/node** (^20.0.0) - TypeScript types for Node.js
- **@types/react** (^18.3.0) - TypeScript types for React
- **@types/react-dom** (^18.3.0) - TypeScript types for React DOM
- **tailwindcss** (^3.4.3) - Utility-first CSS framework
- **postcss** (^8.4.38) - CSS transformation tool
- **autoprefixer** (^10.4.19) - PostCSS plugin for vendor prefixes

## Brand Colors

LendHub brand colors are available as both CSS variables and Tailwind classes:

### System Colors

- `brand-white`, `brand-off-white`, `brand-almost-white`
- `brand-light-grey`, `brand-mid-grey`, `brand-stone`
- `brand-dark-grey`, `brand-almost-black`, `brand-black`

### Primary Colors (Purple)

- `purple-t3`, `purple-t2`, `purple-t1` (tints)
- `purple` (brand primary)
- `purple-s1`, `purple-s2` (shades)

### Secondary Colors

- Red: `red-t3`, `red-t2`, `red-t1`, `red`, `red-s1`, `red-s2`
- Blue: `blue-t3`, `blue-t2`, `blue-t1`, `blue`, `blue-s1`, `blue-s2`
- Green: `green-t3`, `green-t2`, `green-t1`, `green`, `green-s1`, `green-s2`

### Usage Example

```tsx
<button className="bg-purple text-white hover:bg-purple-s1">Click me</button>
```

## Project Structure

```
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles with brand colors
├── components/
│   └── StyleGuide.tsx    # Brand color reference
├── public/
│   └── lendhub_logo.png  # LendHub logo
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Ready to Code!

This skeleton is intentionally minimal to give you a clean slate for the technical interview. Feel free to add components, pages, and functionality as needed.
