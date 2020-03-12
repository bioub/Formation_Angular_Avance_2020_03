const fs = require('fs');

try {
  const content = fs.readFileSync('package.json', { encoding: 'UTF-8' });
  fs.writeFileSync('package.json.copy', content);
  console.log('Copy done');
} catch (err) {
  console.log('Error during copy');
}