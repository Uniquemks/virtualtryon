const fs = require('fs');

const baseDir = 'src/assets/clothes/normal white t-shirt avif';
const listFiles = (subDir) => {
    try {
        const files = fs.readdirSync(`${baseDir}/${subDir}`);
        console.log(`${subDir}: ${files.join(', ')}`);
    } catch(e) {
        console.log(`${subDir}: Error reading directory`);
    }
}

listFiles('');
listFiles('torso');
listFiles('tummy');
listFiles('neck');
listFiles('arms');
listFiles('chest');
