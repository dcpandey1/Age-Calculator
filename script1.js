const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){
    //let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let outputDate = new Date(document.getElementById("date-output").value);
    let birthMonth,birthDate,birthYear;

    // birth details
    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }

    // Current details
    let currentDetails = {
        date:outputDate.getDate(),
        month:outputDate.getMonth()+1,
        year:outputDate.getFullYear()
    }
    
    /*let currentMonth = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();*/

    leapChecker(currentDetails.year);

    if(
        birthDetails.year >  currentDetails.year||
        ( birthDetails.month > currentDetails.month && birthDetails.year == currentDetails.year) || 
        (birthDetails.date > currentDetails.date && birthDetails.month == currentDetails.month && birthDetails.year == currentDetails.year)
    ){
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }

    birthYear = currentDetails.year - birthDetails.year;

    if(currentDetails.month >= birthDetails.month){
        birthMonth = currentDetails.month - birthDetails.month;
    }
    else{
        birthYear--;
        birthMonth = 12 + currentDetails.month - birthDetails.month;
    }

    if(currentDetails.date >= birthDetails.date){
        birthDate = currentDetails.date - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentDetails.month - 2];
        birthDate = days + currentDetails.date - birthDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthDate,birthMonth,birthYear);
}

function displayResult(bDate,bMonth,bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}

function leapChecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}