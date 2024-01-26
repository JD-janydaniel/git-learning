var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    for(var i=0;i<res.length;i++){
    console.log(res[i].name.common)
    }
    for(var j=0;j<res.length;j++){
        if(res[j].capital){
        console.log(res[j].capital[0]+" "+res[j].area)
        }
        else{
            console.log("invalid capital"+res[j].area)
        }
    }
}