
const express = require("express");
// const getmethods = require('./utils/getMethodsJson')
const app = express();
const port = 3334;
// const Busboy = require('busboy');
// const bodyParser  = require ('body-parser') 
// const inspect = require('util').inspect;
// axios.get('https://api.btc126.com/alt.php').then(res =>{
//     console.log('axios-res',res);

// })


  // fs.readFile("./test.json",'utf8', (err, data) => {
  //   if (err) throw err;
  //   // code = JSON.parse(data)
  //   // console.log('readFile',JSON.parse(data));
  // })  
// getmethods()
// app.use(bodyParser.json())
// app.use(bodyParser.text())
// app.use(bodyParser.raw())
// app.use(bodyParser.urlencoded())

// app.use(function (req, res) {
//   console.log('req',req.body);
  
//   // res.setHeader('Content-Type', 'text/plain')
//   // res.write('you posted:\n')
//   // res.end(JSON.stringify(req.header, null, 2))
// })
app.get('/', (req, res) => res.send('Hello World哈哈哈哈'))

// app.post('/testPost',(req,res) => {  //formData传值这样写'/testPost',upload.single(),function
//   var busboy = new Busboy({ headers: req.headers });
  //Busboyf方式获取form-data
    // busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    //   console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
    //   file.on('data', function(data) {
    //     console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
    //   });
    //   file.on('end', function() {
    //     console.log('File [' + fieldname + '] Finished');
    //   });
    // });
    // busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
    //   // console.log('Field [' + fieldname + ']: value: ' + inspect(val));
    //   // console.log('Field [' + fieldname + ']: value: ' + val);
    //   console.log('fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype',fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype);
      
    //   debugger
    // });
    // busboy.on('finish', function() {
    //   // console.log('Done parsing form!');
    //   res.writeHead(303, { Connection: 'close', Location: '/' });
    //   res.end();
    // });
    // req.pipe(busboy);
  // console.log('req,res',req.body);
  // res.send('POST request to homepage')
// })

app.listen(port, () => console.log(`Example app listening on port port!`))

