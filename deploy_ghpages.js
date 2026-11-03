import { execSync } from 'child_process';

const distDir = 'C:\\Users\\HP\\.gemini\\antigravity\\scratch\\deviq-website\\dist';

console.log('Deploying dist to gh-pages branch...');
try {
  execSync('git init', { cwd: distDir, stdio: 'inherit' });
  execSync('git config user.name DevIQ', { cwd: distDir, stdio: 'inherit' });
  execSync('git config user.email contact@deviq.dev', { cwd: distDir, stdio: 'inherit' });
  execSync('git checkout -b gh-pages', { cwd: distDir, stdio: 'inherit' });
  execSync('git add -A', { cwd: distDir, stdio: 'inherit' });
  execSync('git commit -m "Deploy production build to GitHub Pages"', { cwd: distDir, stdio: 'inherit' });
  execSync('git remote add origin https://github.com/deviq26/deviq.git', { cwd: distDir, stdio: 'inherit' });
} catch (e) {
  // remote might already exist
}

try {
  execSync('git push -f origin gh-pages', { cwd: distDir, stdio: 'inherit' });
  console.log('Successfully pushed to gh-pages branch!');
} catch (e) {
  console.error('Push error:', e.message);
  process.exit(1);
}
