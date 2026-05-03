# Active Context: AD BEAST — Autonomous Ad Engine

## Current State

**Project Status**: 🚧 In Development

Full UI implementation of AD BEAST complete. Now implementing backend functionality for ad generation, posting, and scouting.

## Recently Completed

- [x] Base Next.js 16 setup with App Router
- [x] TypeScript configuration with strict mode
- [x] Tailwind CSS 4 integration
- [x] ESLint configuration
- [x] Memory bank documentation
- [x] Recipe system for common features
- [x] Added database with Drizzle ORM and SQLite
- [x] User authentication APIs (signup, login, logout, me)
- [x] Stripe payment integration with checkout sessions
- [x] Full AD BEAST UI: hero, header with wolf logo, setup forms, platform selection, modals (pricing, admin, scout), output section
- [x] Mobile-responsive design with animations and Norse mythology branding
- [x] Legal pages (Privacy, Terms, Support)
- [x] Moved landing to /landing, app to home page

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | AD BEAST main app interface | ✅ UI Complete, 🚧 Adding functionality |
| `src/app/landing/page.tsx` | Landing page | ✅ Complete |
| `src/app/layout.tsx` | Root layout | ✅ Ready |
| `src/app/globals.css` | Global styles | ✅ Complete |
| `src/app/api/` | API routes for auth, payments, ad generation | 🚧 Implementing |
| `src/db/` | Database schema and client | ✅ Complete |
| `src/components/` | React components | ✅ Inline in page.tsx |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Current Focus

Core ad generation functionality implemented. Next steps:

1. Add Scout Reddit API for subreddit analysis
2. Implement posting intents (copy to clipboard, one-click URLs)
3. Add admin dashboard login and credential management
4. Add campaign download/report feature
5. Implement usage limits and upgrade prompts
6. Add error handling and loading states

## Quick Start Guide

### Project Goals

- AI-powered ad generation for 8+ platforms
- Reddit Scout mode for subreddit targeting
- Tiered pricing (Free/Pro/Beast/Admin)
- One-click and auto-posting capabilities
- Charity donation integration (10% to GiveDirectly)

### To add components:

Create in `src/components/` following the established patterns.

### To add API routes:

For Claude integration, Reddit posting, etc.

## Available Recipes

| Recipe | File | Use Case |
|--------|------|----------|
| Add Database | `.kilocode/recipes/add-database.md` | Data persistence with Drizzle + SQLite |

## Pending Improvements

- [ ] Complete AD BEAST implementation
- [ ] Add more recipes (auth, email, etc.)
- [ ] Add testing setup recipe

## Session History

| Date | Changes |
|------|---------|
| Initial | Template created with base setup |
| 2026-05-03 | Started AD BEAST implementation |
