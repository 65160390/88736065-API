import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        type: 'input',
        message: "Enter your URL:",
        name: "URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    console.log('QR code generated and saved as qr_img.png');
  })
  .catch((error) => {
      console.error("Something else went wrong: ", error);
    }
  );