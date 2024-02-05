var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
   /* for(var i=0;i<res.length;i++){
    console.log(res[i].name.common)
    }
    for(var j=0;j<res.length;j++){
        if(res[j].capital){
        console.log(res[j].capital[0]+" "+res[j].area)
        }
        else{
            console.log("invalid capital"+res[j].area)
        }
    }*/
    // 1.print only those countries name who belongs to asia region
// this will show whole detail of the countries
//var result_asia = res.filter((ele)=>ele.region == "Asia");
//console.log(result_asia);
// this will show only the countries name
//var country_names = result_asia.map((ele)=> ele.name);
//console.log(country_names);

// 2.print capital of those countries whosw population is less thsn 2lakhs
 //var popul = res.filter((ele) => ele.population <= 200000);
// console.log(popul);
 //this will show the capital
 //var Capital = popul.map((ele)=> ele.capital);
 //console.log(Capital);

var total_poul = res.reduce((acc,cv)=>acc+cv.population,0);
console.log(total_poul);


}