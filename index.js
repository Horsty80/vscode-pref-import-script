const fs = require('fs');
const os = require('os');

const vscodeSettingsPath = `${os.homedir()}/Library/Application Support/Code/User/settings.json`;
const vscodeInsidersSettingsPath = `${os.homedir()}/Library/Application Support/Code - Insiders/User/settings.json`;

fs.readFile(vscodeSettingsPath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  fs.writeFile(vscodeInsidersSettingsPath, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('VSCode settings imported to VSCode Insiders!');
  });
});