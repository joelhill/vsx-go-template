# Publish Runbook

Runbook for publishing new versions of the Go Template extension to Open VSX.

**Prerequisites:** [Open VSX setup](OPEN_VSX_SETUP.md) must be completed once (Eclipse account, Publisher Agreement, token, namespace).

---

## Option A: Publish via GitHub Release (recommended)

1. Update `CHANGELOG.md` with the new version and changes.
2. Bump version in `package.json`: `npm version patch` (or `minor` / `major`).
3. Commit and push to `main`.
4. Create a GitHub release:
   - **Releases** → **Draft a new release**
   - Tag: `v0.0.x` (match `package.json` version)
   - Title: `Go Template 0.0.x - Open VSX` (or similar)
   - Paste release notes from CHANGELOG
   - **Publish release**
5. The **Publish to Open VSX** workflow runs automatically. Check **Actions** for success.

---

## Option B: Publish via CLI (Windows users may hit ovsx native binding errors)

1. Update `CHANGELOG.md` and bump version: `npm version patch`.
2. Run `npm run check:manifest`.
3. From project root:
   ```powershell
   $env:OVSX_PAT = "your-token"
   npx ovsx publish -p $env:OVSX_PAT
   ```
4. If `ovsx` fails on Windows, use Option A instead.

---

## Post-publish verification

1. **Open VSX**: https://open-vsx.org/extension/joelhill/go-template — confirm new version and metadata.
2. **Cursor install**: Search may lag; install by ID or from VSIX:
   - `cursor --install-extension joelhill.go-template` (if indexed)
   - Or build and install locally: `npm run package` then `cursor --install-extension ./go-template-0.0.x.vsix`

---

## Troubleshooting

| Issue | Action |
|-------|--------|
| `ovsx` "Failed to load native binding" on Windows | Use GitHub Release (Option A) or run from Linux/WSL. |
| Extension not found in Cursor search | Install from VSIX: `npm run package` → `cursor --install-extension ./go-template-0.0.x.vsix` |
| Publish workflow fails | Ensure `OVSX_PAT` is set in repo **Settings → Secrets → Actions**. |
| Version already exists | Bump version in `package.json` and try again. |
