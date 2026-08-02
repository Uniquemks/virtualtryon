const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add custom asset extensions
if (!config.resolver.assetExts.includes('avif')) {
  config.resolver.assetExts.push('avif');
}

// Ignore build and .gradle directories inside node_modules from Metro watcher
config.watcher = config.watcher || {};
config.resolver.blockList = [
  /.*\/node_modules\/.*\/build\/.*/,
  /.*\/node_modules\/.*\/\.gradle\/.*/,
  /.*\/android\/build\/.*/,
  /.*\/android\/\.gradle\/.*/,
];

module.exports = config;

