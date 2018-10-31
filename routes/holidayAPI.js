

function getHolidays(countryIn,yearIn) {
  let userCountry = countryIn;
  let year = yearIn;
  let apiKey = 'b092774fba78d1a14bdeba1ca278c19bf50c29a0';
  let queryUrl = `https://www.calendarindex.com/api/v1/holidays?country=${userCountry}&year=${year}&api_key=${apiKey}`;
  
  // front-end
  // $.get(queryUrl).then(function(data){
  // // console.log(data.response);
  // // $("#holidaysDump").text(JSON.stringify(data.response));  
  //   return data.response;
  // })


  // server-side
  const request=require('request');
  const fs=require('fs');

  request(queryUrl,function(error,data,body){
    if(error)throw error;
    if(typeof(body)==="string"){
    body=JSON.parse(body);      
    }
    console.log(body.response.holidays);
    // fs.writeFile('holidays.json',JSON.stringify(body.response),function(err){
    //   if(err)throw err;
    //   console.log("holidays.json created.");
    // });
    // return body.response.holidays;
  });


};

getHolidays("US","2018");  