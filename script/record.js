let fs = require("fs");
let path = require("path");
let rp = require("request-promise");

const endpoint = "https://us-central1-fir-test-2fc32.cloudfunctions.net/helloWorldMiddle";
const repeat = 10;

const resFileName = 'result.csv'
const resFilePath = path.join(__dirname, resFileName);
// initialize
fs.writeFileSync(resFilePath, "count,response time[msec]\n");

function writeLine(filename, line){
    let filePath = path.join(__dirname, filename);
    fs.appendFileSync(filePath, line+'\n', (err) => {
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
async function callFunction(){
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
    console.log(res);
    const t2 = new Date().getTime();
    return t2-t1;
}

async function testFunction(){
    for(let i = 1; i <= repeat; i++){
        try{
            const msec = await callFunction();
            writeLine(resFileName, `${i},${msec}`);
            await sleep((i*5)*60*1000);
        }catch(err){
            console.log(err);
        }
    }
    // try{
    //     const msec = await callFunction();
    //     writeLine(resFileName, `${i},${msec}`);
    //     await()
    // }
}

testFunction().then((res)=>{
    console.log(res);
}).catch((err) => {
    console.log(err);
}); 