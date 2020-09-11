$(document).ready(function(){
    $.get("https://4qstatisticsapi.azurewebsites.net/api/statistics").done(function(data){ console.log(data); });
});