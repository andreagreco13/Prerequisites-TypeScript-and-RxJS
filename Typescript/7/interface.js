"use strict";
exports.__esModule = true;
function showUser(user) {
    console.log(user.firstname + " " + user.lastname);
}
function showUser2(user) {
    console.log(user.firstname + " " + user.lastname);
}
showUser({ lastname: 'aa', firstname: 'bb' });
showUser2({ lastname: 'cc', firstname: 'dd' });
showUser2({ lastname: 'ee', firstname: 'ff', address: 'aci' });
