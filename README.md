# Fake Store API Test Framework

JavaScript API tests for [Fake Store API](https://fakestoreapi.com/) using Playwright Test and Postman/Newman. The default suite is read-only. The login test runs only when credentials are configured.

## Requirements

- Node.js 18 or newer
- npm

## Setup

```bash
npm install
npx playwright install
```

Copy `.env.example` to `.env` to override the API URL or enable the login test:

```env
API_BASE_URL=https://fakestoreapi.com
API_USERNAME=saber
API_PASSWORD=saber2026
```

Keep real credentials out of source control. The API URL can point to a compatible local or staging instance.

## Run Tests

```bash
npm test                 # Playwright API suite
npm run test:smoke       # Product and category smoke checks
npm run test:postman     # Postman collection through Newman
npm run test:all         # Playwright and Newman
npm run report           # Open the last Playwright HTML report
```

Playwright tests use `API_BASE_URL`. Newman uses the included `postman/FakeStoreAPI.postman_environment.json`, whose `baseUrl` can be edited in Postman. To run the collection in Postman, import both JSON files from `postman/` and select the `Fake Store API - Local` environment. Set `username` and `password` there to run the optional login request; otherwise that request is skipped.

## Coverage

- Product list and detail response contracts
- Product categories
- Cart list and detail response contracts
- User list and detail response contracts
- Optional login token check

Fake Store API is a demo service: writes, when used, may be simulated and are not a reliable persistence check. This starter framework keeps its default suite read-only.

## Project Layout

```text
playwright.config.js
tests/
	api/
		products.spec.js
		commerce.spec.js
		auth.spec.js
		contracts.js
postman/
	FakeStoreAPI.postman_collection.json
	FakeStoreAPI.postman_environment.json
```