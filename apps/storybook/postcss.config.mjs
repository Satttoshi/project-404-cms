import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  plugins: {
    '@tailwindcss/postcss': {
      base: join(__dirname, '../../'),
    },
  },
};
