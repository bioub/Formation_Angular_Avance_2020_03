const fs = require('fs');

async function main() {
  try {
    const content = await fs.promises.readFile('package.json', { encoding: 'UTF-8' });
    await fs.promises.writeFile('package.json.copy', content);
    console.log('Copy done');
  } catch (err) {
    console.log('Error during copy');
  }
}

main();
