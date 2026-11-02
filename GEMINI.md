# Repository guidance

See [AGENTS.md](AGENTS.md) for all other repository guidance.

## GitHub Actions approval

- Do not create new GitHub Actions workflows, add new jobs, or enable additional automated triggers by default.
- A concrete, task-specific reason is required; prefer existing workflows or local checks when they cover the need.
- Before adding or enabling that automation, explain the reason, planned triggers/jobs, and expected runner usage or cost. Ask Joel for explicit approval and wait for his answer before proceeding.
- A good reason alone is not approval. A general request to implement a feature, run tests, or open a pull request does not authorize new GitHub Actions automation.
