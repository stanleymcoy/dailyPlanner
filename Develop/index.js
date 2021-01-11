var d = new Date();

var year = d.getFullYear();
var month = d.getMonth() + 1;
var day = d.getDate();

var totalDays = new Date(year, month, 0).getDate();
var output =
    (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day + '/' + year;


$(".date").text("${output}");