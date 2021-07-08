const Request = require("../axious");
const fs = require("fs");
const path = require('path')
function searchApi() {
    return new Request({
      url: "http://yucaixuan.com/lotterycnt.php?lotteryid=101&id=1258&f=show",//"https://api.btc126.com/alt.php",
      method: "get",
      data: "",
    });
  }
//生成目录文件地址
function resolve(dir) {  
    if(dir){
        return path.join(__dirname, dir)
    }else{
        return path.join(__dirname)
    }
}
function createDir (dir){
    fs.readdir(resolve(),(err,files)=>{
        console.log('files',files);   
        if(files.find((item)=>item == dir)){
            return
        }
        fs.mkdirSync(resolve(dir))
    })
}
// console.log('resolve',resolve());
// console.log('createDir',createDir('getJSON'));
function getmethods(Arr = [],index = 0){
    let resultArr = Arr,i=index
    createDir('getJSON')
    const interval= setInterval(() => {
      (async function(resultArr){
        let code =await searchApi().then((res) => {
            
            let data = res.data.split('<br>')
            for(let i = data.length - 1;i>0;i--){
              if(data[i].indexOf('【耀世】五星定位')>0){
                console.log('data[i]',data[i].match(/\(([^)]*)\)/)[1]);
                return data[i].match(/\(([^)]*)\)/)[1]
                break;
              }
            }          
          // return res.data
        })
        i++
        // resultArr.push(...JSON.parse(code))
        resultArr.push(code)
        // console.log('resultArr',resultArr,resultArr.length);
        //清除定时器
        // if(i == 5){
        //   clearInterval(interval)
          fs.writeFile(resolve('getJSON')+"/test.json", JSON.stringify(resultArr), function (err) {
            if (err) {
              return console.log(err);
            }
            console.log("The file was saved!");
          });
        // }
      })(resultArr,i)
    }, 3000);
  }
  
module.exports = getmethods