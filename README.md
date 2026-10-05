# cloud-lane-scratch

## slugify

Convert text to a URL-safe slug.

```ts
import { slugify } from './src/slugify.js';

slugify('Hello World');      // 'hello-world'
slugify('café résumé');      // 'cafe-resume'
slugify('too   many--dashes'); // 'too-many-dashes'
```

**Rules:**
- Lowercased
- ASCII only (accented characters normalized, others removed)
- Words joined by single hyphens
- No leading or trailing hyphens

### Run tests

```bash
npm install
npm test
```
