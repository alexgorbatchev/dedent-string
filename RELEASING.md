# Releasing

This package uses semantic versioning and publishes to npm from the tag-triggered GitHub Actions workflow in `.github/workflows/release.yml`.

## Versioning

- Use `major` for breaking API changes.
- Use `minor` for backward-compatible features.
- Use `patch` for backward-compatible fixes.
- Keep `package.json` aligned with the next release before tagging.

## Release checklist

1. Update `package.json` to the target version.
2. Run the full validation path:
   - `bun run build`
   - `bun test`
   - `bun run typecheck`
   - `npm pack --dry-run`
3. Commit the version bump.
4. Create the release tag as `vX.Y.Z`.
5. Push `main` first, then push the tag.
6. Create GitHub release notes for the same tag with `gh release create` or `gh release edit`.

## Publish flow

- Pushing `vX.Y.Z` triggers `.github/workflows/release.yml`.
- The workflow derives the npm version from the tag, syncs `package.json`, installs dependencies, reruns validation, and publishes with `npm publish --provenance --access public`.
- GitHub release notes are not created by the workflow. Add them separately with `gh` after the tag is pushed.

## Example

```bash
bun run build
bun test
bun run typecheck
npm pack --dry-run
git add package.json
git commit -m "chore(release): 1.0.2"
git tag -a v1.0.2 -m "v1.0.2"
git push origin main
git push origin v1.0.2
gh release create v1.0.2 --title "v1.0.2" --generate-notes
```
