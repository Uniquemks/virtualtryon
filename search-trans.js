const fs = require('fs');
const transcriptPath = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8b638302-ca87-4e3e-94ab-25d51f835de9\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.includes('trouser:') && l.includes('pant')) {
        const parsed = JSON.parse(l);
        if (parsed.content && parsed.content.includes('trouser:')) {
            console.log('Found it in step:', parsed.step_index);
            // write it to a file
            fs.writeFileSync('c:/Users/HP/virtual-trail-room-demo/recovered_map.txt', parsed.content, 'utf8');
            break;
        }
    }
}
