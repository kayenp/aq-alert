# Claude Code Guidelines

## Explaining Code Behavior

### Specificity
When explaining a behavior, always specify whether it is specific to the particular function/component being discussed or whether it applies to a general class of code (e.g., all async functions, all hooks, all transitions). If a behavior applies generally, say so explicitly, even if the question was about a specific function.

### In-Context and General Explanations
When explaining the behavior of code, cover two scopes:

1. **In your code** — what's happening in the specific context of the user's file
2. **In general** — how it behaves in other circumstances

These must be visually separated (e.g., with headers or line breaks), not blended together.

---

## AQ Alert Project

### Stack
- Node.js backend with TypeScript (ES modules)
- `openmeteo` library for air quality data from the Open-Meteo API
- Express server with CORS

### TypeScript Configuration
- `tsconfig.json` uses `"module": "nodenext"` and `"target": "esnext"`
- Strict mode is enabled along with `verbatimModuleSyntax` and `isolatedModules`
- Relative imports must use `.js` extensions (e.g., `"./utils/openmeteo.js"`) — TypeScript resolves them to `.ts` at compile time but requires the runtime extension
- No `outDir`/`rootDir` configured yet — uncomment in tsconfig when ready to compile

### Running the Project
- `.ts` files cannot be run directly with `node` — use `tsx` (e.g., `npx tsx index.ts`) or compile with `tsc` first
- Dev script in `package.json` currently runs `node --watch` on `.js` — update to `tsx --watch` for TypeScript support

### OpenMeteo Library Notes
- `valuesArray()` returns `Float32Array | null`, not a regular `Array`
- `Float32Array.reduce()` requires an initial value to satisfy TypeScript (e.g., `.reduce((a, cV) => a + cV, 0)`)
- Alternatively, use `Array.from()` to convert to a standard `number[]` before chaining array methods
- API response objects (from `fetchWeatherApi`) may be `undefined` — use optional chaining or guard checks

### Data Structure Conventions
- Structure pollutant data as flat objects, not arrays of single-key objects
- Example: `{ name: "pm2.5", current: ..., hourly: ..., hours_1: ..., hours_8: ... }`

### Known Issues Addressed
- `truncateData()` in `calculations.ts` — parameter type should match the shape of pollutant objects (`{ name: string; hours_8: number | undefined }`)
- Switch cases in `truncateData` need `return` or `break` to prevent fall-through
- `preciseRound()` — avoid `as any` cast; use `10 ** decimal` multiplier pattern instead
