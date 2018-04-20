function myProjectFunction(x,title){

var start = x;
//Project Start Date Day
var mms = start.substr(0,2);
//Project Start Month
var dds = start.substr(3,2);
//Project Start Year
var yyyys = start.substr(6,4);
//Project Start Formatted 
var start_date = dds + "/" + mms + "/" + yyyys;
//Present Date 
var today = new Date();
//Present Date Day
var ddp = today.getDate();
var oneday = -1;
//Present Date Month
var mmp = today.getMonth();

//Present Date Full Year
var yyyyp = today.getFullYear();
//Present Date Formatted
var present_date = mmp + "/" + ddp + "/" + yyyyp;

//if years are not equals
if(yyyys!=yyyyp){
   
var dofsdate= 31-dds;  //get remaining days of month ending for example if the date is 27 and 3 days remaining  saved in dofsdate
    var mofsdate = 12-mms;   // same as days get remaining months of years ending for example if the month is 10 and 2 months remaining  saved in mofsdate
    var daysofmo = mofsdate * 30; // we know 30 days in 1 month so multiply with 30 of remaining months and saved in daysofmo
    var totaldayofendyear = dofsdate+daysofmo; // now add total days from starting date to end of year
    
    
    var days = mmp*30; //now multiply by 30 to mmp(moth of present date)
    var totaldayfromstartyear = days+ddp+oneday; //total days of starting year to present date total days we exclude the day of present date from total days
   


var totalday = totaldayfromstartyear+totaldayofendyear; //total days (starting date to end year and starting year to present date)
    
    
    var totalyear = (yyyyp-yyyys) -1;//now add year difference -1 for we have days in upper line
    
    
    
    var tmonth = parseInt(totalday/30)+(totalyear*12); //total months starting date to present date
    var tday = totalday%30; //total days remaining by mode operation 
    if(tmonth =>12){   // now if month are grater than 12 so we have years in months
      var ty =parseInt(tmonth/12); //we get total year in our date counts
        var tm = tmonth%12;      // remaining month by mode operation
    }else if (tmonth < 12){   //if month is less than 12 so we dnt have years here ty=0
        var tm = tmonth;
        var ty = 0;
    }
    
    
    
}else if(yyyys == yyyyp){ //if years are equals
    var dofsdate = 31 - dds;  //geting days from start of that month  example if the date is 27 and 27 days extra  saved in dofsdate
    var mofsdate = mmp-mms;   // difference of month remember years are same forexample starting date in 2018 and present date is also in 2018
    var daysofmo = mofsdate * 30;//multiply by 30 for days
    var totaldayofendyear = (dofsdate+daysofmo+ddp+oneday); //total days we exclude the day of present date from total days
    var tm = parseInt(totaldayofendyear/30); //total months
    var tday = totaldayofendyear%30; //total days over month
    var ty =0;  //years are 0 because year of starting date is equal to year of ending date
}
    
    
    if(ty==1){
        var Total_Years = ty+" Year";
    }else{
        var Total_Years = ty+" Years";
    }
    if(tm==1){
        var Total_Months = tm+" Month";
    }else{
        var Total_Months = tm+" Months";
    }
    if(tday==1){
        var Total_Days = tday+" Day";
    }else{
        var Total_Days = tday+" Days";
        
    }
    
    ett  = Total_Years+" "+Total_Months+" "+Total_Days;


document.write('<tr><td>'+title+'</td><td>'+x+'</td><td>'+ett +'</td>');
}