const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add custom asset extensions here
config.resolver.assetExts.push('avif');

module.exports = config;
