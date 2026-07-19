const fs = require('fs');
const file = 'src/utils/patchResolver.ts';
let content = fs.readFileSync(file, 'utf8');

const correctPresets = `export const BODY_PRESETS: Record<string, AvatarConfig> = {
  S: { bodyShape: 'B1', torso: 'F1', size: 'S', chest: 'B1-F1-S', leftArm: 'D1-S', rightArm: 'E1-S', neck: 'C1', shoulders: 'SHL1', legs: 'G1', tummy: 'AA1' },
  M: { bodyShape: 'B2', torso: 'F2', size: 'M', chest: 'B2-F2-M', leftArm: 'D2-M', rightArm: 'E2-M', neck: 'C2', shoulders: 'SHL2', legs: 'G2', tummy: 'AA2' },
  L: { bodyShape: 'B4', torso: 'F4', size: 'L', chest: 'B4-F4-M', leftArm: 'D3-A', rightArm: 'E3-A', neck: 'C3', shoulders: 'SHL4', legs: 'G3', tummy: 'AA4' },
  XL: { bodyShape: 'B3', torso: 'F3', size: 'XL', chest: 'B3-F3-A', leftArm: 'D3-A', rightArm: 'E3-A', neck: 'C3', shoulders: 'SHL3', legs: 'G3', tummy: 'AA3' },
  XXL: { bodyShape: 'B5', torso: 'F5', size: 'XXL', chest: 'B5-F5-H', leftArm: 'D4-H', rightArm: 'E4-H', neck: 'C3', shoulders: 'SHL3', legs: 'G3', tummy: 'AA5' }
};`;

content = content.replace(/export const BODY_PRESETS.*?};/s, correctPresets);

const missingChestKeys = `  "B1-F1-S": require("../assets/bodies/Light-M Body Male light brown/B/B1 flat/B1-F1-S.webp"),
  "B1-F1-M": require("../assets/bodies/Light-M Body Male light brown/B/B1 flat/B1-F1-M.webp"),
  "B1-F1-A": require("../assets/bodies/Light-M Body Male light brown/B/B1 flat/B1-F1-A.webp"),
  "B1-F1-H": require("../assets/bodies/Light-M Body Male light brown/B/B1 flat/B1-F1-H.webp"),
  "B2-F2-S": require("../assets/bodies/Light-M Body Male light brown/B/B2 rectangle/B2-F2-S.webp"),
  "B2-F2-M": require("../assets/bodies/Light-M Body Male light brown/B/B2 rectangle/B2-F2-M.webp"),
  "B2-F2-A": require("../assets/bodies/Light-M Body Male light brown/B/B2 rectangle/B2-F2-A.webp"),
  "B2-F2-H": require("../assets/bodies/Light-M Body Male light brown/B/B2 rectangle/B2-F2-H.webp"),
  "B3-F3-S": require("../assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-S.webp"),
  "B3-F3-M": require("../assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-M.webp"),
  "B3-F3-A": require("../assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-A.webp"),
  "B3-F3-H": require("../assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-H.webp"),
  "B4-F4-S": require("../assets/bodies/Light-M Body Male light brown/B/B4 triangle/B4-F4-S.webp"),
  "B4-F4-M": require("../assets/bodies/Light-M Body Male light brown/B/B4 triangle/B4-F4-M.webp"),
  "B4-F4-A": require("../assets/bodies/Light-M Body Male light brown/B/B4 triangle/B4-F4-A.webp"),
  "B4-F4-H": require("../assets/bodies/Light-M Body Male light brown/B/B4 triangle/B4-F4-H.webp"),
  "B5-F5-S": require("../assets/bodies/Light-M Body Male light brown/B/B5 oval/B5-F5-S.webp"),
  "B5-F5-M": require("../assets/bodies/Light-M Body Male light brown/B/B5 oval/B5-F5-M.webp"),
  "B5-F5-A": require("../assets/bodies/Light-M Body Male light brown/B/B5 oval/B5-F5-A.webp"),
  "B5-F5-H": require("../assets/bodies/Light-M Body Male light brown/B/B5 oval/B5-F5-H.webp"),
  "B6-F6-S": require("../assets/bodies/Light-M Body Male light brown/B/B6 inverted/B6-F6-S.webp"),
  "B6-F6-M": require("../assets/bodies/Light-M Body Male light brown/B/B6 inverted/B6-F6-M.webp"),
  "B6-F6-A": require("../assets/bodies/Light-M Body Male light brown/B/B6 inverted/B6-F6-A.webp"),
  "B6-F6-H": require("../assets/bodies/Light-M Body Male light brown/B/B6 inverted/B6-F6-H.webp"),
`;

// Insert the chest keys into ASSET_MAP if they don't exist
if (!content.includes('"B1-F1-S":')) {
    content = content.replace(/export const ASSET_MAP: Record<string, any> = {/, "export const ASSET_MAP: Record<string, any> = {\n" + missingChestKeys);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed BODY_PRESETS and ASSET_MAP');
