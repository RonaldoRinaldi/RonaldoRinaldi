

var fs = require("fs");
let save = []

fs.readFile('brokenDataLayer001.json','utf8', function readFileCallback(err, data) {

    if (err){
        console.log(err);
    } 

  let convertedFile = JSON.parse(data)
  

  
  save.push(convertedFile)

  let convertedData = JSON.stringify(save)

  a = convertedData
  str = a.replace(/æ/g ,"a").replace(/ø/g ,"o").replace(/¢/g ,"c").replace(/ß/g ,"b");
  
  var readyJson = JSON.parse(str)

console.log(readyJson);
  

  //Função para trocar cada null por um previous
  //console.log(str);
  //i = 0;
  //var quantidadeElementos = str.replace(/null/g, ++i)

  //  console.log(quantidadeElementos)
  
  
})
