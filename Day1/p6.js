const fs=require('fs');
const append=()=>{
    const data="appended text"
    fs.appendFile("./data.txt",data,(err)=>{
        if(err) console.log(err);
        else console.log("Text appended successfully")

    })
}
append();