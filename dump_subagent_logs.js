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
  if (line.includes('A3F3C1306BB22632453C010DC5C67A7B')) {
    // Look for tool output of capture_browser_console_logs
    if (line.includes('"logs"') || line.includes('"text"')) {
      try {
        const step = JSON.parse(line);
        // Find if there is a tool response
        const str = JSON.stringify(step);
        if (str.includes('FINAL PATCHES')) {
          console.log(`--- Step ${step.step_index} matches ---`);
          // Let's find and print all mentions of FINAL PATCHES or garment/body log strings
          const matches = str.match(/\[.*?\] z=\d+ category=\w+/g);
          if (matches) {
            console.log(matches.join('\n'));
          } else {
            console.log('No patch logs found, but string matched.');
          }
        }
      } catch (e) {}
    }
  }
}
