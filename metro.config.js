const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add custom asset extensions
if (!config.resolver.assetExts.includes('avif')) {
  config.resolver.assetExts.push('avif');
}

// Block list only for native android build artifacts (do NOT block node_modules build folders)
config.resolver.blockList = [
  /.*\/android\/build\/.*/,
  /.*\/android\/\.gradle\/.*/,
];

module.exports = config;
