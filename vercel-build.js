// vercel-build.js
const { execSync } = require('child_process');

console.log('Starting custom Vercel build process...');

try {
  // First build the design-system and ui packages
  console.log('Building @repo/design-system...');
  execSync('pnpm --filter @repo/design-system build', { stdio: 'inherit' });

  console.log('Building @repo/ui...');
  execSync('pnpm --filter @repo/ui build', { stdio: 'inherit' });

  // Then build the web app
  console.log('Building web app...');
  execSync('pnpm --filter web build', { stdio: 'inherit' });

  console.log('Custom build process completed successfully!');
} catch (error) {
  console.error('Error during build process:', error);
  process.exit(1);
}
