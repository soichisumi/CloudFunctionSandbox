let fs = require("fs");
let path = require("path");
let rp = require("request-promise");

const endpoint = "https://us-central1-fir-test-2fc32.cloudfunctions.net/helloWorld";
const repeat = 1;

const resFileName = 'result.csv'
const resFilePath = path.join(__dirname, resFileName);
// initialize
fs.writeFileSync(resFile, "count,response time[msec]\n");

function writeLine(filename, line){
    let filePath = path.join(__dirname, filename);
    fs.appendFileSync(filePath, line+'\n', (err) => {
        console.log(`err: ${err}`);
    });
};

// call function and returns execution time
async function callFunction(){
    const options = {
        uri: endpoint,
        body: {
            message: "test",
        },
        json: true,
    };
    const t1 = new Date().getMilliseconds();
    const res = await rp(options);
    console.log(res);
    const t2 = new Date().getMilliseconds();
    return t2-t1;
}

async function testFunction(){
    for(let i = 0; i < repeat; i++){
        try{
            const msec = await callFunction();
            writeLine(`${i},${msec}`);
        }catch(err){
            console.log(err);
        }
    }
}

testFunction().then((res)=>{
    console.log(res);
}).catch((err) => {
    console.log(err);
});