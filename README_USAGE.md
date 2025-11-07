# Marketcheck API SDK - Usage Guide

## Installation

```bash
npm install marketcheck-api-sdk-3.0.0.tgz
```

## Usage Options

### Option 1: JavaScript with Type Checking (Recommended for JS users)

Create `test.js`:

```javascript
// @ts-check
import { CarSearchApi, Configuration } from "marketcheck-api-sdk";

const config = new Configuration({
    apiKey: "YOUR_API_KEY"
});

const api = new CarSearchApi(config);

async function search() {
    const response = await api.searchCarActive({
        make: ["Toyota"],
    });
    console.log(response.data);
}

search();
```

Add to your `package.json`:
```json
{
  "type": "module"
}
```

Run:
```bash
node test.js
```

### Option 2: TypeScript with tsx (Recommended for TS users)

Create `test.ts`:

```typescript
import { CarSearchApi, Configuration } from "marketcheck-api-sdk";

const config = new Configuration({
    apiKey: "YOUR_API_KEY"
});

const api = new CarSearchApi(config);

const response = await api.searchCarActive({
    make: ["Toyota"],
});
console.log(response.data);
```

Install tsx:
```bash
npm install --save-dev tsx
```

Run:
```bash
npx tsx test.ts
```

### Option 3: TypeScript with Compilation

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": false
  }
}
```

Add to your `package.json`:
```json
{
  "type": "module"
}
```

Compile and run:
```bash
npx tsc test.ts
node test.js
```

### Option 4: CommonJS (No top-level await)

Create `test.ts` or `test.js`:

```typescript
import { CarSearchApi, Configuration } from "marketcheck-api-sdk";

const config = new Configuration({
    apiKey: "YOUR_API_KEY"
});

const api = new CarSearchApi(config);

async function search() {
    const response = await api.searchCarActive({
        make: ["Toyota"],
    });
    console.log(response.data);
}

search();
```

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": false
  }
}
```

Run:
```bash
npx tsx test.ts
# or compile first
npx tsc test.ts && node test.js
```

## Type Checking

The SDK includes full TypeScript type definitions. In your IDE:
- You'll get autocomplete for all API methods
- Type errors will show as red underlines
- Hover over methods to see documentation

If using JavaScript, add `// @ts-check` at the top of your file to enable type checking.
