# Open VSX Account and Namespace Setup

One-time setup for publishing to Open VSX. Complete these steps before the first publish.

## 1. Create an Eclipse account

Register at [accounts.eclipse.org](https://accounts.eclipse.org/user/register). Ensure the **GitHub Username** field matches the GitHub account you use to log in to open-vsx.org.

## 2. Log in and sign the Publisher Agreement

1. Log in to [open-vsx.org](https://open-vsx.org/) with your GitHub account.
2. Go to **Profile** (avatar → Settings).
3. Click **Log in with Eclipse** and authorize with your eclipse.org account.
4. Click **Show Publisher Agreement**, read it, and click **Agree**.

## 3. Create an access token

1. Go to [open-vsx.org Access Tokens](https://open-vsx.org/user-settings/tokens).
2. Click **Generate New Token** and enter a description (e.g. `vsx-go-template publish`).
3. Copy the token and store it securely (e.g. `OVSX_PAT` environment variable).
4. The token is never shown again after you close the dialog.

## 4. Create the namespace (one-time per publisher)

### Option A: Via GitHub Action (recommended on Windows)

If `npx ovsx` fails with "Failed to load native binding" on Windows, use the GitHub Action instead:

1. Push your code to GitHub.
2. Add `OVSX_PAT` as a repository secret: **Settings → Secrets and variables → Actions → New repository secret**.
3. Go to **Actions → Create Open VSX Namespace → Run workflow**.
4. The workflow runs on Linux where ovsx works.

### Option B: Via CLI (Linux/macOS or if ovsx works locally)

From the project root:

```powershell
$env:OVSX_PAT = "your-token-here"
npx ovsx create-namespace joelhill -p $env:OVSX_PAT
```

## 5. (Recommended) Claim namespace ownership

To get a verified publisher badge:

1. Create an issue at [github.com/EclipseFdn/open-vsx.org](https://github.com/EclipseFdn/open-vsx.org/issues/new/choose) to claim ownership of the `joelhill` namespace.
2. Follow the template and wait for approval.

## References

- [Publishing Extensions (Open VSX Wiki)](https://github.com/eclipse/openvsx/wiki/Publishing-Extensions)
- [Namespace Access (Open VSX Wiki)](https://github.com/eclipse/openvsx/wiki/Namespace-Access)
- [ovsx CLI (npm)](https://www.npmjs.com/package/ovsx)
