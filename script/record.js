let fs = require("fs");
let path = require("path");
let rp = require("request-promise");

<<<<<<< Updated upstream
const endpoint = "https://us-central1-fir-test-2fc32.cloudfunctions.net/helloWorldMiddle";
const repeat = 10;
=======
const dummyToken = "e136cf6b06375198a89260a4b3f0ec4f87354987f83ff552ccfbbcfb6fea4ed5bb3a20dcd57374ff6008ebdcabeaf320061d9832587ff1d1e2c2d8617a7fbbd5744ae13c47ca0b8073f6cfd789f5a51cdbc774416026ebc344d4a973627250e9";

const endpoint = "https://us-central1-fir-test-2fc32.cloudfunctions.net/helloWorldMiddle";
const repeat = 3;
>>>>>>> Stashed changes

const resFileName = 'result.csv'
const resFilePath = path.join(__dirname, resFileName);
// initialize
fs.writeFileSync(resFilePath, "i,response time[msec]\n");

function writeLine(filename, line) {
    let filePath = path.join(__dirname, filename);
    fs.appendFileSync(filePath, line + '\n', (err) => {
        console.log(`err: ${err}`);
    });
};

function sleep(millisec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, millisec);
    });
}

// call function and returns execution time
async function callFunction() {
    const options = {
        uri: endpoint,
        method: "POST",
        body: {
            message: "test",
        },
        json: true,
    };
    const t1 = new Date().getTime();
    const res = await rp(options);
    const t2 = new Date().getTime();
    console.log(res);
    return t2 - t1;
}

async function testFunction() {
    const msec = await callFunction();
    writeLine(resFileName, `${0},${msec}`);
    for (let i = 1; i <= repeat; i++) {
        for (let j = 1; j <= 5; j++) {
            try {
                await sleep((i * 10) * 60 * 1000);
                const msec = await callFunction();
                writeLine(resFileName, `${i},${msec}`);
            } catch (err) {
                console.log(err);
            }
        }
    }
}

testFunction().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
}); 