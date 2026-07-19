const fs = require('fs');
const path = require('path');

const transcriptPath = path.join(
  'C:', 'Users', 'HP', '.gemini', 'antigravity-ide', 'brain',
  '7f7df4ab-d080-4550-a232-80d4eeb72cce', '.system_generated', 'logs', 'transcript_full.jsonl'
);

if (!fs.existsSync(transcriptPath)) {
  console.error('Could not find transcript_full.jsonl');
  process.exit(1);
}

const content = fs.readFileSync(transcriptPath, 'utf8');
const lines = content.split('\n');

for (const line of lines) {
  if (line.includes('FINAL PATCHES RENDER ORDER')) {
    // Print this line and the next 1000 characters
    const idx = line.indexOf('FINAL PATCHES RENDER ORDER');
    console.log(line.substring(idx - 100, idx + 800));
    console.log('--------------------------------------------------');
  }
}
