"use strict";
exports.__esModule = true;
var DAYS;
(function (DAYS) {
    DAYS[DAYS["MON"] = 1] = "MON";
    DAYS[DAYS["TUE"] = 2] = "TUE";
    DAYS[DAYS["WED"] = 3] = "WED";
    DAYS[DAYS["THU"] = 4] = "THU";
    DAYS[DAYS["FRI"] = 5] = "FRI";
    DAYS[DAYS["SAT"] = 6] = "SAT";
    DAYS[DAYS["SUN"] = 7] = "SUN";
})(DAYS || (DAYS = {}));
;
console.log(DAYS);
console.log("\n");
console.log(DAYS.SAT);
console.log(DAYS[3]);
function isWorkingDay(day) {
    if (day === DAYS.SUN || day === DAYS.SAT) {
        return true;
    }
    else {
        return false;
    }
}
console.log("\n" + isWorkingDay(DAYS.SAT));
console.log("\n" + isWorkingDay(3));
