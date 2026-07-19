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
  if (!line.trim()) continue;
  if (line.includes('A3F3C1306BB22632453C010DC5C67A7B') && line.includes('Cream Jacket')) {
    try {
      const step = JSON.parse(line);
      const str = JSON.stringify(step);
      // Let's print any substrings that look like DOM elements around "Cream Jacket"
      const regex = /{[^{}]*?Cream Jacket[\s\S]*?}/gi;
      const matches = str.match(regex);
      if (matches) {
        console.log(`--- Step ${step.step_index} matches ---`);
        matches.forEach(m => console.log(m));
      } else {
        // Just print a window around the match
        const idx = str.indexOf('Cream Jacket');
        console.log(str.substring(idx - 300, idx + 300));
      }
    } catch (e) {}
  }
}
