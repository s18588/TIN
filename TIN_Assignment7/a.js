
function parse(p){
    if(Number(p)) return Number(p);
    else throw "Wrong param";
}

function calc(requestUrl, number1, number2){
    if (requestUrl.startsWith('/add'))
        return Number(number1) + Number(number2);
    if (requestUrl.startsWith('/subtract'))
        return Number(number1) - Number(number2);
    if (requestUrl.startsWith('/multiply'))
        return Number(number1) * Number(number2);
    if (requestUrl.startsWith('/divide')){
        if (number2 === 0) throw "Division by zero!";
        return 0;
    }
    throw "Operator " + requestUrl + " is not supported.";
}

const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    const query = url.parse(req.url,true).query;
    var a = parse(query.a);
    var b = parse(query.b);
    var result = calc(req.url, a, b);
    let responseText = "<html>	<p>" + a + " +-/* " + b + " = " + result + "</html>";
    res.end(responseText);
}).listen(5000);

