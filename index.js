const fs = require('fs');
const getdata = require('./data.js');
const path = './hello.json';
async function savedata(){
    const newdata = await getdata;
    console.log(newdata);
    let filedata = [];
    if(fs.existsSync(path)){
        const content = fs.readFileSync(path,"utf-8");
        try{
            filedata = JSON.parse(content);
            if(!Array.isArray(filedata)){
                filedata = [filedata];
            }
        }catch{
            filedata = [];
        }
    }
    filedata.push(newdata);
    console.log(newdata);
    
    fs.writeFileSync(path,JSON.stringify(filedata,null,2));
}
savedata();