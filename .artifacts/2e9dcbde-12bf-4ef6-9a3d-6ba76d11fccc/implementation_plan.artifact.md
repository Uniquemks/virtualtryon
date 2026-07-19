# Implementation Plan - Production Release Preparation

This plan covers the steps to generate a production-ready Release APK that includes the embedded JavaScript bundle and doesn't require a Metro server to run.

## Proposed Changes

### 1. Build Configuration Verification
- Ensure `minifyEnabled` can be toggled via `gradle.properties` if desired.
- Verify `bundleCommand` is correct for Expo SDK 56 integration.
- Check if `hermesEnabled` is set correctly for performance.

### 2. Signing Configuration
- Currently, the `release` build type uses `signingConfigs.debug`. For a "production" release, we will stick to this for now as per the user's focus on "launching without Metro", but will note it in the report.

### 3. Build Execution
- Execute `./gradlew :app:assembleRelease` with the necessary environment variables (`JAVA_HOME`, `ANDROID_PREFS_ROOT`).
- Ensure the JavaScript bundle is correctly generated and embedded in the APK.

### 4. Verification
- Verify the existence of the Release APK.
- Check the size and contents of the APK to ensure the JS bundle is present (usually `assets/index.android.bundle` or `assets/main.jsbundle` depending on the build).
- Provide the final report `release-build-report.md`.

## User Review Required

> [!IMPORTANT]
> The current `release` build type uses the `debug` signing key. This is sufficient for testing but not for Play Store submission. We will proceed with this unless a production keystore is provided.

> [!NOTE]
> `minifyEnabled` is currently `false` by default. Enabling it (R8) will reduce APK size but significantly increase build time and might require additional ProGuard rules.

## Open Questions
- Do you want to enable `minifyEnabled` (R8 optimization) for this release? It defaults to `false`.
- Should I proceed with the `debug` signing key for the `release` build?
