const request = require("request");
let url =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR1xVB4dky8uew6pimHWwlv60kVWgKLlSq5V5fRPKtHOrfAzOydd-xMLAfQ";
let obj;

request(url, function(error, response, body) {
  obj = JSON.parse(body);
  console.log(obj[0].base_ccy + "-" + obj[0].ccy + "=" + obj[0].buy);
  console.log(obj[1].base_ccy + "-" + obj[1].ccy + "=" + obj[1].buy);
  console.log(obj[2].base_ccy + "-" + obj[2].ccy + "=" + obj[2].buy);
  console.log(obj[3].base_ccy + "-" + obj[3].ccy + "=" + obj[3].buy);
});
