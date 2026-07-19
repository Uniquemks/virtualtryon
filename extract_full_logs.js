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

const fileContent = fs.readFileSync(transcriptPath, 'utf8');
const lines = fileContent.split('\n');

for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const step = JSON.parse(line);
    // Look for browser subagent steps (step_index 660 or containing BROWSER_SUBAGENT)
    if (step.type === 'BROWSER_SUBAGENT' || step.step_index === 660) {
      console.log(`--- Step ${step.step_index} (${step.type}) ---`);
      // Look for console logs inside the subagent actions
      const logsMatch = step.content.match(/capture_browser_console_logs[\s\S]*?"output":\s*"([\s\S]*?)"/g);
      if (logsMatch) {
        logsMatch.forEach(m => console.log(m));
      } else {
        // If not matched, print a snippet of content containing console log results
        const idx = step.content.indexOf('capture_browser_console_logs');
        if (idx !== -1) {
          console.log(step.content.substring(idx, idx + 1000));
        }
      }
    }
  } catch (e) {
    // Ignore JSON errors
  }
}
