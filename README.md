# Marketcheck API SDK

A TypeScript/JavaScript SDK for the Marketcheck API with full type support.

## Installation

```bash
npm install marketcheck-api-sdk-3.0.0.tgz
```

---

## For JavaScript Users

**IMPORTANT**: To see type errors and get autocomplete in JavaScript files, you MUST use ONE of these two options:

### Option A: Using `// @ts-check` (Quick & Easy)

### Step 1: Add to your `package.json`
```json
{
  "type": "module"
}
```

### Step 2: Create your JavaScript file (e.g., `test.js`)

**CRITICAL**: Add `// @ts-check` at the top of every `.js` file where you want type checking!

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
        // ✅ With @ts-check, typing 'makeee' will show RED underline!
    });
    console.log(response.data);
}

search();
```

### Step 3: Run your file
```bash
node test.js
```

---

### Option B: Using `jsconfig.json` (Project-wide Type Checking)

If you want type checking for ALL JavaScript files in your project automatically (without adding `// @ts-check` to each file):

### Step 1: Create `jsconfig.json` in your project root

```json
{
  "compilerOptions": {
    "checkJs": true,
    "module": "ESNext",
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "moduleResolution": "node",
    "strict": false
  },
  "exclude": ["node_modules"]
}
```

### Step 2: Add to your `package.json`
```json
{
  "type": "module"
}
```

### Step 3: Create your JavaScript file (e.g., `test.js`)

**No need for `// @ts-check`** when using `jsconfig.json`!

```javascript
import { CarSearchApi, Configuration } from "marketcheck-api-sdk";

const config = new Configuration({
    apiKey: "YOUR_API_KEY"
});

const api = new CarSearchApi(config);

async function search() {
    const response = await api.searchCarActive({
        make: ["Toyota"],
        // ✅ Type errors will show automatically!
    });
    console.log(response.data);
}

search();
```

### Step 4: Run your file
```bash
node test.js
```

---

### ✅ Benefits for JavaScript Users
- **Type checking in IDE**: See red underlines for invalid parameters (like `makeee` instead of `make`)
- **Autocomplete**: Your IDE will suggest all available methods and parameters
- **Error detection before runtime**: Catch mistakes while coding
- **No compilation needed**: Run directly with Node.js
- **Choose your preference**: Use `// @ts-check` per file OR `jsconfig.json` for the whole project

---

## For TypeScript Users

**IMPORTANT**: Follow ALL these steps to ensure proper type checking and error detection in your `.ts` files!

### Step 1: Create `tsconfig.json` in your project root

**CRITICAL**: This file is REQUIRED for TypeScript to work properly!

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

**Important fields explained:**
- `"lib": ["ES2020", "DOM"]` - **MUST include "DOM"** or you'll get errors on `console`, `setTimeout`, etc.
- `"module": "ESNext"` - Required for top-level `await` support
- `"target": "ES2020"` - Modern JavaScript features
- `"skipLibCheck": true` - Prevents errors in `node_modules` type files

### Step 2: Add to your `package.json`

**CRITICAL**: This is required for ES modules to work!

```json
{
  "type": "module"
}
```

### Step 3: Install TypeScript and tsx

```bash
npm install --save-dev typescript tsx
```

**Why both?**
- `typescript` - For type checking and compilation
- `tsx` - For running `.ts` files directly without manual compilation

### Step 4: Create your TypeScript file (e.g., `test.ts`)

```typescript
import { CarSearchApi, Configuration } from "marketcheck-api-sdk";

const config = new Configuration({
    apiKey: "YOUR_API_KEY"
});

const api = new CarSearchApi(config);

const response = await api.searchCarActive({
    make: ["Toyota"],
    // ✅ TypeScript will show RED underline if you type 'makeee' instead of 'make'!
});

console.log(response.data);
```

### Step 5: Run your file

**Option A: Using tsx (Recommended - No compilation needed)**
```bash
npx tsx test.ts
```

**Option B: Compile first, then run**
```bash
npx tsc test.ts
node test.js
```

---

### ✅ Benefits for TypeScript Users
- **Full type safety**: RED underlines appear immediately for invalid parameters
- **IntelliSense**: Complete autocomplete for all API methods and parameters
- **Type definitions included**: No need to install separate `@types` packages
- **Better refactoring**: Rename and refactor with confidence
- **Catch errors before runtime**: TypeScript errors appear in your IDE instantly

### ⚠️ Common TypeScript Issues & Solutions

**Problem**: "Cannot find name 'console'"
- **Solution**: Add `"DOM"` to the `lib` array in `tsconfig.json`

**Problem**: "Top-level 'await' expressions are only allowed..."
- **Solution**: Set `"module": "ESNext"` in `tsconfig.json`

**Problem**: "Symbol only refers to a type" (axios errors)
- **Solution**: Add `"skipLibCheck": true` in `tsconfig.json`

**Problem**: Type errors not showing in IDE
- **Solution**: Make sure you have `tsconfig.json` created and your IDE restarted

---

## API Examples

### Search for Cars
```typescript
import { CarSearchApi, Configuration } from "marketcheck-api-sdk";

const config = new Configuration({
    apiKey: "YOUR_API_KEY"
});

const api = new CarSearchApi(config);

// Search with filters
const response = await api.searchCarActive({
    make: ["Toyota"],
    model: ["Camry"],
    year: "2020-2024",
    state: "CA"
});

console.log(response.data);
```

### Get Dealer Information
```typescript
import { DealerAPIApi, Configuration } from "marketcheck-api-sdk";

const config = new Configuration({
    apiKey: "YOUR_API_KEY"
});

const dealerApi = new DealerAPIApi(config);

const dealer = await dealerApi.getDealer({
    dealerId: "12345"
});

console.log(dealer.data);
```

### VIN Decoder
```typescript
import { VINDecoderAPIApi, Configuration } from "marketcheck-api-sdk";

const config = new Configuration({
    apiKey: "YOUR_API_KEY"
});

const vinApi = new VINDecoderAPIApi(config);

const vinData = await vinApi.decodeVIN({
    vin: "1HGCM82633A123456"
});

console.log(vinData.data);
```

---

## Features

✅ Full TypeScript support with type definitions
✅ Works with both JavaScript and TypeScript
✅ Autocomplete and IntelliSense in modern IDEs
✅ Error detection for invalid parameters
✅ Comprehensive API coverage
✅ Built-in OAuth token management
✅ Rate limiting support
✅ Pagination helpers

---

## Troubleshooting

### JavaScript: Not seeing type errors?
Make sure you added `// @ts-check` at the top of your `.js` file.

### TypeScript: "Cannot find name 'console'"?
Add `"DOM"` to the `lib` array in your `tsconfig.json`:
```json
"lib": ["ES2020", "DOM"]
```

### "Top-level await" error?
Make sure your `tsconfig.json` has:
```json
"module": "ESNext"
```
And your `package.json` has:
```json
"type": "module"
```

### Still having issues?
- Run `npm install --save-dev typescript` to ensure TypeScript is installed
- Run `npm install --save-dev tsx` for easy TypeScript execution
- Check that your IDE (VS Code, WebStorm, etc.) has TypeScript support enabled

---

## Documentation

For detailed API documentation, see the `docs/` directory included in this package.

---

## Support

For issues and questions, please contact Marketcheck support.

---

## License

Unlicense
