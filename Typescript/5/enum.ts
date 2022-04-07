export{};

enum DAYS {
    MON = 1,
    TUE,
    WED,
    THU,
    FRI,
    SAT,
    SUN
};

console.log(DAYS);

console.log("\n");
console.log(DAYS.SAT);
console.log(DAYS[3]);

function isWorkingDay(day: DAYS){
    if(day === DAYS.SUN || day === DAYS.SAT){
        return true;
    }
    else{
        return false;
    }
}

console.log("\n" + isWorkingDay(DAYS.SAT));
console.log("\n" + isWorkingDay(3));