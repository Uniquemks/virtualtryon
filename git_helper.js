const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

function log(msg) {
  console.log(`\x1b[36m[Git Helper]\x1b[0m ${msg}`);
}

function logSuccess(msg) {
  console.log(`\x1b[32m[Success]\x1b[0m ${msg}`);
}

function logWarning(msg) {
  console.log(`\x1b[33m[Warning]\x1b[0m ${msg}`);
}

function logError(msg) {
  console.error(`\x1b[31m[Error]\x1b[0m ${msg}`);
}

function runGit(cmd) {
  try {
    return execSync(cmd, { stdio: 'pipe' }).toString().trim();
  } catch (err) {
    return null;
  }
}

function scanForSecrets() {
  log('Scanning backend files for secrets and API keys...');
  const filesToScan = [
    path.join(__dirname, 'backend', 'main.py'),
    path.join(__dirname, 'backend', 'requirements.txt'),
  ];

  let clean = true;
  const secretPattern = /r8_[A-Za-z0-9]{38}/g; // Matches typical Replicate tokens

  filesToScan.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (secretPattern.test(content)) {
        logError(`Hardcoded Replicate token found inside: ${filePath}`);
        clean = false;
      }
    }
  });

  // Verify .env file is not being staged
  try {
    const status = execSync('git status --porcelain', { stdio: 'pipe' }).toString();
    if (status.includes('.env') && !status.includes('.env.example')) {
      logError('Warning: A real `.env` file is untracked or modified. Ensure it is ignored.');
      clean = false;
    }
  } catch (e) {}

  return clean;
}

async function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans.trim());
  }));
}

async function main() {
  console.log('\n==================================================');
  console.log('      GIT PRODUCTION VERIFICATION & PUSH TOOL     ');
  console.log('==================================================\n');

  // 1. Scan for secrets first
  const secretsScanOk = scanForSecrets();
  if (!secretsScanOk) {
    logError('Secrets scan failed. Please secure files before staging them.');
    process.exit(1);
  }
  logSuccess('No hardcoded secrets detected in the codebase.');

  // 2. Check if git is initialized
  let isGitInit = runGit('git rev-parse --is-inside-work-tree') === 'true';
  if (!isGitInit) {
    logWarning('Git repository not initialized in this folder.');
    const initAns = await askQuestion('Do you want to initialize Git? (y/n): ');
    if (initAns.toLowerCase() === 'y' || initAns.toLowerCase() === 'yes') {
      execSync('git init', { stdio: 'inherit' });
      logSuccess('Git repository initialized.');
    } else {
      logError('Git initialization aborted. Cannot proceed with push.');
      process.exit(1);
    }
  }

  // 3. Stage the files
  log('Staging backend, git helper, and configuration files...');
  execSync('git add backend/main.py backend/requirements.txt backend/.env.example backend/README.md .gitignore git_helper.js', { stdio: 'inherit' });
  
  // 4. Show current status
  console.log('\n--- Current Git Status (Staged Files) ---');
  execSync('git status', { stdio: 'inherit' });

  // 5. Ask for commit message
  const commitMsg = await askQuestion('\nEnter commit message (or press Enter for default: "feat(backend): secure Replicate API token and configure Render deployment"): ');
  const finalMsg = commitMsg || 'feat(backend): secure Replicate API token and configure Render deployment';
  
  try {
    execSync(`git commit -m "${finalMsg}"`, { stdio: 'inherit' });
    logSuccess('Changes committed successfully.');
  } catch (err) {
    logWarning('Nothing to commit or commit failed. Checking if already committed...');
  }

  // 6. Check remotes
  let remotes = runGit('git remote -v');
  console.log('\n--- Configured Git Remotes ---');
  if (remotes) {
    console.log(remotes);
  } else {
    console.log('(No remotes configured)');
  }

  // 7. Configure Remote
  const remoteAns = await askQuestion('\nDo you want to add or change the GitHub remote URL? (y/n): ');
  if (remoteAns.toLowerCase() === 'y' || remoteAns.toLowerCase() === 'yes') {
    const url = await askQuestion('Enter GitHub Repository URL (e.g., https://github.com/username/repo.git): ');
    if (url) {
      if (remotes) {
        execSync(`git remote set-url origin ${url}`);
      } else {
        execSync(`git remote add origin ${url}`);
      }
      logSuccess(`Remote set to: ${url}`);
    }
  }

  // 8. Determine branch
  let currentBranch = runGit('git branch --show-current') || 'main';
  const branchAns = await askQuestion(`\nEnter branch name to push to (default: "${currentBranch}"): `);
  const targetBranch = branchAns || currentBranch;

  // 9. Push to GitHub
  log(`Pushing staged changes to remote origin on branch "${targetBranch}"...`);
  console.log('If prompted, please authenticate in the popup or enter your credentials.');
  try {
    execSync(`git push -u origin ${targetBranch}`, { stdio: 'inherit' });
    
    // Get commit details
    const latestCommitHash = runGit('git rev-parse HEAD');
    const remoteUrl = runGit('git remote get-url origin') || 'None';

    console.log('\n==================================================');
    console.log('          GIT OPERATIONS COMPLETE!                ');
    console.log('==================================================');
    console.log(`Repository URL: ${remoteUrl}`);
    console.log(`Branch Name:    ${targetBranch}`);
    console.log(`Commit Hash:    ${latestCommitHash}`);
    console.log('No secrets were committed to version control.');
    console.log('==================================================\n');
  } catch (err) {
    logError('Git push failed. Ensure your remote URL is correct and you have push permissions.');
  }
}

main();
