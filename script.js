let countryName = prompt("enter  country name")
const request = new XMLHttpRequest();
  

request.open("GET","https://restcountries.com/v3.1/name/"+countryName)
request.send();
request.onload=function(){
console.log(this.statusText)    
   console.log(this.response)
      const string = JSON.parse(this.responseText)
      let currencies_html = Object.values(string[0].currencies)
      document.getElementById("countryname").innerText=string[0].altSpellings[2]
      document.getElementById("flagsrc").src=string[0].flags.png
      document.getElementById("themsrc").src=string[0].coatOfArms.png

      // this code show a country captial city
      var Capital_name = document.getElementById("Captial");
      Capital_name.value =string[0].capital


      // this code show a country language
      const langauge = Object.values(string[0].languages)
      var language_name = document.getElementById("Langauge")
      language_name.value=langauge

      // this code show a symbol
      var Currencies_symbol = document.getElementById("Currencies_symbol")
      Currencies_symbol.value=currencies_html[0].symbol
      
      //this code show a country money name
      var Currencies_name = document.getElementById("Currencies_name");
      Currencies_name.value =currencies_html[0].name
    
   //this code show time zone
   var Time_Zone =document.getElementById("Time_Zone");
   Time_Zone.value=string[0].timezones

   //this code show population 
   var population = document.getElementById("population");
   population.value=string[0].population
  }
 
  