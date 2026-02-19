# KOVON Website Replica

## How to Run the Project
To run this project, make sure you have all the required libraries installed. You can run the project using the following command:

```bash
npm start
```

## How to Install Libraries
To install the necessary libraries for this project, run the following command:

```bash
npm install
```

## Project Structure
The project structure is organized as follows:

```
kovon-website-replica/
├── .gitignore
├── .next/                          # Next.js build output (auto-generated)
│   ├── app-build-manifest.json
│   ├── build-manifest.json
│   ├── package.json
│   ├── react-loadable-manifest.json
│   ├── trace
│   ├── cache/
│   │   ├── swc/
│   │   └── webpack/
│   ├── server/
│   │   └── app-paths-manifest.json
│   ├── static/
│   │   ├── chunks/
│   │   └── css/
│   └── types/
├── app/                            # Next.js App Router
│   ├── globals.css                 # Global styles & CSS variables
│   ├── layout.tsx                  # Root layout with theme provider
│   ├── page.tsx                    # Home page
│   └── theme-provider.tsx          # Theme context & MUI provider
├── components/                     # React components
│   ├── features/
│   │   ├── FeaturesSection.tsx
│   │   └── FeatureCard.tsx
│   ├── footer/
│   │   └── Footer.tsx
│   ├── header/
│   │   └── Header.tsx
│   ├── hero/
│   │   └── HeroSection.tsx
│   └── how-it-works/
│       └── HowItWorks.tsx
├── constants/
│   └── content.ts                  # Static content & data
├── types/
│   └── index.ts                    # TypeScript type definitions
├── next-env.d.ts                   # Next.js TypeScript declarations
├── next.config.mjs                 # Next.js configuration
├── package.json                    # Dependencies & scripts
├── postcss.config.js               # PostCSS config for Tailwind
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # Project documentation

Feel free to explore the different components of the project!
