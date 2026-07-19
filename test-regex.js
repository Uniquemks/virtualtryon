const str = `          back: { 
            source: require('foo'), 
            transform: { x: 0 } 
          },
          buttons: { 
            source: require('foo'), 
            transform: { x: 0 } 
          },
          collar: { 
            source: require('foo') 
          }`;
console.log('BEFORE:');
console.log(str);
console.log('AFTER:');
console.log(str.replace(/\s*buttons:\s*\{[^}]+?\},\n/g, '\n'));
