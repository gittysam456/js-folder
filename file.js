const fs=require("fs");
fs.writeFileSync('./test.txt',"Hello PSIT");
fs.writeFile('./test.txt',"Hello psit -cs",(err)=>{});
const result = fs.readFileSync('./test.txt','utf8');
console.log(result);
fs.readFile('./test.txt','utf8',(err,result)=>{
    if(err) {
        console.log("ERROR:",err);
    } else {
        console.log("RESULT:",result);
    }
});
