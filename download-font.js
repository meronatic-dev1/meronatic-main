const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = 'app/fonts';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const file = fs.createWriteStream(path.join(dir, "calsans.woff2"));
https.get("https://github.com/calcom/font/raw/main/fonts/web/CalSans-SemiBold.woff2", function (response) {
    if (response.statusCode === 302 || response.statusCode === 301) {
        https.get(response.headers.location, function (redirectResponse) {
            redirectResponse.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log("Download completed");
            });
        });
    } else {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log("Download completed");
        });
    }
}).on('error', function (err) {
    fs.unlink(dir + "/calsans.woff2");
    console.error(err);
});
