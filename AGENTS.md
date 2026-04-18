# dedent-string

Single-package Bun and TypeScript library. This root file covers the entire repository; do not add nested `AGENTS.md` files unless the repo grows beyond this one package.

## Commands
- Install: `bun install`
- Build: `bun run build`
- Test: `bun test`
- Typecheck: `bun run typecheck`
- Package check: `npm pack --dry-run`
- Full validation: `bun run build && bun test && bun run typecheck && npm pack --dry-run`

## Repo Rules
- Always run the relevant validation commands after changing code, package metadata, CI, hooks, or release docs. Treat `bun run build` as required for export or packaging changes because it also runs `verifyDistExports.ts`.
- Always update `README.md` and `RELEASING.md` when public API, commands, validation steps, versioning, or release behavior changes.
- Always keep this file aligned with `package.json`, `.github/workflows/test.yml`, and `.github/workflows/release.yml`.
- Repository-local skills must live under `.agents/skills/` if they are added later. None are checked in today.

## Release
- This package ships through the tag-driven GitHub Actions workflow in `.github/workflows/release.yml`.
- For any release task, follow `RELEASING.md` exactly. That file is the checked-in source of truth for version bumps, validation, tagging, push order, npm publish automation, and GitHub release notes.

## Boundaries
- Always: keep changes minimal, preserve the existing Bun-based workflow, and prefer root-level guidance because this repo is a single package.
- Ask first: dependency changes, CI or hook changes, release workflow changes, and any public API change that affects semver.
- Never: commit `dist/`, bypass required checks, invent release steps that are not documented in `RELEASING.md`, or claim a task is done while required validation or docs updates are still missing.

## Done Policy
- Work is done only when the requested changes are implemented, the relevant commands from `## Commands` pass, and required documentation updates are complete.
- Work is not done when any required check fails, when README or release docs are stale, or when a requested release has not completed all documented steps.

## References
- `README.md`
- `RELEASING.md`
- `package.json`
- `.github/workflows/test.yml`
- `.github/workflows/release.yml`
