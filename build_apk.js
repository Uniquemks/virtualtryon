const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

function log(msg) {
  console.log(`\x1b[36m[Build Helper]\x1b[0m ${msg}`);
}

function logError(msg) {
  console.error(`\x1b[31m[Error]\x1b[0m ${msg}`);
}

function checkEnvironment() {
  log('Checking build environment prerequisites...');
  
  // 1. Check Java JDK
  try {
    const javaVer = execSync('java -version', { stdio: 'pipe' }).toString();
    log('Java JDK is installed.');
  } catch (err) {
    logError('Java JDK was not found. Please install JDK 17 or higher and set JAVA_HOME.');
    return false;
  }

  // 2. Check Android SDK
  const androidHome = process.env.ANDROID_HOME || process.env.ANDROID_SDK_ROOT;
  if (!androidHome) {
    logError('ANDROID_HOME environment variable is not set. Please set it to your Android SDK location.');
    return false;
  }
  log(`Android SDK found at: ${androidHome}`);
  return true;
}

function runCommand(command) {
  log(`Running: ${command}`);
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (err) {
    logError(`Command failed: ${command}`);
    return false;
  }
}

async function main() {
  console.log('\n==================================================');
  console.log('   VIRTUAL WARDROBE - ANDROID APK BUILD HELPER    ');
  console.log('==================================================\n');

  // Step 1: Ensure assets are configured
  log('Verifying assets directory...');
  const assetsDir = path.join(__dirname, 'assets');
  if (!fs.existsSync(assetsDir) || !fs.existsSync(path.join(assetsDir, 'icon.png'))) {
    log('Assets directory is not fully configured. Running setup_assets.js...');
    try {
      execSync('node setup_assets.js', { stdio: 'inherit' });
    } catch (err) {
      logError('Failed to setup assets. Please make sure setup_assets.js is configured correctly.');
      process.exit(1);
    }
  } else {
    log('Assets are verified.');
  }

  // Step 2: Check Env
  const envOk = checkEnvironment();
  if (!envOk) {
    console.log('\nWarning: Your environment might not be fully configured for local building.');
    console.log('Please make sure you have Android Studio, Android SDK, and Java JDK 17+ installed.');
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('\nDo you want to start the local Android build now? (y/n): ', (answer) => {
    rl.close();
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      console.log('\n--- Starting Build Steps ---\n');
      
      // Step 3: Expo Prebuild
      log('Step 1: Running Expo Prebuild (generating native android project)...');
      const prebuildSuccess = runCommand('npx expo prebuild --platform android --clean');
      if (!prebuildSuccess) {
        logError('Prebuild failed. Please check error output above.');
        process.exit(1);
      }

      // Step 4: Gradle Build
      log('Step 2: Building APK with Gradle...');
      const buildCmd = process.platform === 'win32' 
        ? 'cd android && gradlew.bat assembleDebug' 
        : 'cd android && ./gradlew assembleDebug';

      const buildSuccess = runCommand(buildCmd);
      if (!buildSuccess) {
        logError('Gradle build failed. Please ensure you have the Android SDK platform-tools installed.');
        process.exit(1);
      }

      const apkPath = path.join(__dirname, 'android', 'app', 'build', 'outputs', 'apk', 'debug', 'app-debug.apk');
      console.log('\n==================================================');
      console.log('            BUILD COMPLETED SUCCESSFULLY!         ');
      console.log('==================================================');
      console.log(`Your debug APK is available at:\n${apkPath}\n`);
    } else {
      console.log('\nManual build instructions:');
      console.log('1. Run: npx expo prebuild --platform android');
      console.log('2. Run: cd android');
      console.log('3. Run: gradlew.bat assembleDebug (Windows) or ./gradlew assembleDebug (macOS/Linux)');
      console.log('The APK will be at: android/app/build/outputs/apk/debug/app-debug.apk\n');
    }
  });
}

main();
