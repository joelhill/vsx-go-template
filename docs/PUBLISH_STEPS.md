# Publish Steps (Phase 5)

After completing [Open VSX setup](OPEN_VSX_SETUP.md) and the repository changes, run these steps to publish.

## Pre-publish verification

1. Confirm `publisher` in `package.json` is `joelhill`.
2. Confirm no remaining `romantomjak` links in user-facing metadata (except fork attribution in CHANGELOG).
3. Run `npm run check:manifest`.
4. (Optional) Run `npm run package` to build a `.vsix` and smoke-test in Cursor.

## Publish

From the project root:

```powershell
# Set your token (or pass via -p)
$env:OVSX_PAT = "your-open-vsx-token"

# Publish
npx ovsx publish -p $env:OVSX_PAT
```

Or with inline token:

```powershell
npx ovsx publish -p "your-open-vsx-token"
```

## Post-publish validation

1. **Open VSX listing**: Visit https://open-vsx.org/extension/joelhill/go-template and verify metadata.
2. **Cursor install**: In Cursor, open Extensions (Ctrl+Shift+X), search for "Go Template" or `joelhill.go-template`, and install.
3. **CLI install** (optional): `cursor --install-extension joelhill.go-template`

## Definition of done

- [ ] Open VSX page exists for `joelhill.go-template` with correct metadata and links
- [ ] Namespace is contributor-ready (and ideally owner-verified)
- [ ] README and changelog reflect fork ownership and Open VSX process
- [ ] Cursor can install the extension by ID
