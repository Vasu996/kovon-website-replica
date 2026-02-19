# Kovon Website Replica

This is a Next.js + TypeScript + Tailwind project (replica of the Kovon landing page). It contains a small component structure under `components/` and uses the Next App Router (`app/` directory).

## Quick Start

Prerequisites
- Node.js 18+ (or the version supported by your `package.json`)
- npm or pnpm

Install

```bash
npm install
```

Run development server

```bash
npm run dev
# or if your `package.json` uses `next dev` script
```

Build for production

```bash
npm run build
npm start
```

If `package.json` does not include these scripts, add them:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

## Project Structure (overview)

- `app/` - Next.js App Router pages and layout
- `components/` - UI components grouped by feature
- `constants/` - static content
- `types/` - TypeScript types
- `next.config.mjs`, `tailwind.config.ts`, `postcss.config.js` - framework configs

## Deploying to Vercel

Recommended: push the repo to GitHub and import it on Vercel (Framework: Next.js). Vercel will use `npm run build` automatically.

Deploy via Vercel CLI (one-off):

```bash
npm i -g vercel
vercel login
vercel          # interactive deploy
vercel --prod   # production deploy
```

Optional: add a `vercel.json` for custom routes/headers if needed.

## Git / GitHub notes

If you see a `403` when pushing (permission denied), possible fixes:

- Use GitHub CLI and login interactively:

```bash
gh auth login
git push -u origin main
```

- Use an SSH key (recommended long-term):

```bash
# generate key locally
ssh-keygen -t ed25519 -C "your_email@example.com"
# add the public key to GitHub > Settings > SSH and GPG keys
git remote set-url origin git@github.com:Vasu996/kovon-website-replica.git
git push -u origin main
```

- Or create a Personal Access Token (PAT) and use it for a one-time HTTPS push (do not store PAT in plain text):

```bash
git remote set-url origin https://<USERNAME>:<PAT>@github.com/Vasu996/kovon-website-replica.git
git push -u origin main
git remote set-url origin https://github.com/Vasu996/kovon-website-replica.git
```

Also ensure you have a `.gitignore` (this repo already includes one to exclude `node_modules/`, `.next/`, etc.).

## Environment variables

If your app needs secrets, set them in Vercel dashboard (Project → Settings → Environment Variables) or provide a local `.env.local` during development (do not commit `.env.local`).

## Next steps I can help with
- Push this repo to GitHub (I can run `gh auth login` and push, or guide you to add SSH/PAT)
- Create a minimal `vercel.json` if you need custom routing
- Deploy now with the Vercel CLI

---
Created for the `app/` Next.js project in this workspace. If you want any section expanded (detailed CI, custom domain steps, or README badges), tell me which part to add.
