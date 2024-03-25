//1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
    let request = new XMLHttpRequest()
    request.open("GET","https://restcountries.com/v3.1/all")
    request.send()
    request.onload = function(){
        let res = JSON.parse(request.response)
        console.log(res)
   //1a. Get all the countries from Asia continent /region using Filter function
        let cntr = res.filter(cnt_arr=>cnt_arr.continents[0]=="Asia")
        let asia_cntr = cntr.map((cntr=>cntr.name.common))
        console.log("All the countries from ASIA continent:",asia_cntr)

   //1b.Get all the countries with a population of less than 2 lakhs using Filter function
        let pop_less = res.filter(cnt_arr => cnt_arr.population<200000)
        let pop_cntr_list = pop_less.map((cntr=>cntr.name.common))
        console.log("All the countries with a population of less than 2 lakhs:",pop_cntr_list)

        //1c. Print the following details name, capital, flag, using forEach function
        let capital = (arr) => {
          if('capital' in arr)
            return arr.capital[0]
          else
            return "undefined"
          }
         res.forEach((arr=>console.log("Country name is:",arr.name.common,"\n", "Captial is:",capital(arr),"\n","Flage is:",arr.flag)))

    // //1d. Print the total population of countries using reduce function
         let pop_cntr = res.map((ele=>ele.population))
         let pop_count = pop_cntr.reduce((counter,ele)=>(counter+ele),0)
         console.log("Total Population:",pop_count)

    //1e.Print the country that uses US dollars as currency.
          for(let i=0;i<res.length;i++){
             let isCurrency = res[i].currencies !== undefined;
             if(isCurrency){
                  let currencyObj = res[i].currencies;
                  let isUSD  = currencyObj.USD !== undefined;
                  if(isUSD){
                    console.log("This Country uses US dollars as currency:",res[i].name.common)
                  }
             }
           }
    }