const request = require("request");
let url =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR1xVB4dky8uew6pimHWwlv60kVWgKLlSq5V5fRPKtHOrfAzOydd-xMLAfQ";
let obj;

request(url, function(error, response, body) {
  obj = JSON.parse(body);
  console.log("Курсы валют" + "\n");
  console.log(
    "Гривна к Евро" +
      " " +
      obj[0].base_ccy +
      "-" +
      obj[0].ccy +
      " " +
      "\n" +
      "Покупка" +
      " " +
      obj[0].buy
  );
  console.log("Продажа" + " " + obj[0].sale);

  console.log(
    "\n" +
      "Гривна к Рубль" +
      " " +
      obj[1].base_ccy +
      "-" +
      obj[1].ccy +
      " " +
      "\n" +
      "Покупка" +
      " " +
      obj[1].buy
  );
  console.log("Продажа" + " " + obj[1].sale + "\n");

  console.log(
    "\n" +
      "Гривна к Доллар" +
      " " +
      obj[2].base_ccy +
      "-" +
      obj[2].ccy +
      " " +
      "\n" +
      "Покупка" +
      " " +
      obj[2].buy
  );
  console.log("Продажа" + " " + obj[2].sale + "\n");

  console.log(
    "\n" +
      "Гривна к Биткоин" +
      " " +
      obj[3].base_ccy +
      "-" +
      obj[3].ccy +
      " " +
      "\n" +
      "Покупка" +
      " " +
      obj[3].buy
  );
  console.log("Продажа" + " " + obj[3].sale + "\n");
});
