const fs = require('fs');
const path = require('path');

const transcriptPath = path.join(
  'C:', 'Users', 'HP', '.gemini', 'antigravity-ide', 'brain',
  '7f7df4ab-d080-4550-a232-80d4eeb72cce', '.system_generated', 'logs', 'transcript.jsonl'
);

if (!fs.existsSync(transcriptPath)) {
  console.error('Could not find transcript.jsonl');
  process.exit(1);
}

const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    // Find step that contains get_browser_console_logs or capture_browser_console_logs
    if (JSON.stringify(data).includes('capture_browser_console_logs')) {
      console.log('--- LOG ENTRY ---');
      console.log(JSON.stringify(data, null, 2));
    }
  } catch (err) {
    // Ignore parse errors
  }
}
