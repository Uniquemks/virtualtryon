const { execSync } = require('child_process');
const fs = require('fs');

console.log('Testing build...');
try {
  const output = execSync('npx expo export', { cwd: __dirname + '/..', encoding: 'utf-8', stdio: 'pipe' });
  fs.writeFileSync(__dirname + '/build_result.log', 'SUCCESS:\n' + output);
  console.log('Build succeeded!');
} catch (err) {
  const errOutput = (err.stdout || '') + '\n' + (err.stderr || '') + '\n' + err.message;
  fs.writeFileSync(__dirname + '/build_result.log', 'FAILED:\n' + errOutput);
  console.log('Build failed! Check scratch/build_result.log');
}
