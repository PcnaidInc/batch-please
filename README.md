# Batching on Workers AI Explorer

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/craigsdennis/batch-please-workers-ai)

<!-- dash-content-start -->
This template provides example API implementations that show off how to batch your AI requests on Workers AI. [Read the Batch API docs](https://developers.cloudflare.com/workers-ai/features/batch-api/)

It demonstrates how to make use of the async queue functionality, as well as check the current status.

The main code to explore is in the [./src/index.ts](./src/index.ts) file and the endpoints are prefixed with `/example`.
<!-- dash-content-end -->


## Develop

```bash
npm install
npm run dev
```

## CI

This project uses GitHub Actions to typecheck (via `tsc --noEmit`) and run tests (via `vitest`) on pull requests and pushes to `main`.

## Deploy

```bash
npm run deploy
```
