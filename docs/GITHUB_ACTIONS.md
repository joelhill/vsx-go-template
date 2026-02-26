# GitHub Actions

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| **Create Open VSX Namespace** | Manual (`workflow_dispatch`) | Creates the `joelhill` namespace in Open VSX. Run once per publisher. |
| **Publish to Open VSX** | Release created | Packages the extension and publishes it to Open VSX when a GitHub release is created. |

## Required secret

Both workflows use `OVSX_PAT` (Open VSX personal access token). Add it in **Settings → Secrets and variables → Actions**.

## When to run

- **Create Open VSX Namespace**: One-time, during [Open VSX setup](OPEN_VSX_SETUP.md). Skip if the namespace already exists.
- **Publish to Open VSX**: Runs automatically on each new release. No manual trigger needed.
