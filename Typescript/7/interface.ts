export{};

interface IUser {
    lastname : string, 
    firstname : string,
    //aggiungo un dato opzionale
    address? : string
}

function showUser(user: {lastname : string, firstname : string}){
    console.log(user.firstname + " " + user.lastname);
}

function showUser2(user: IUser){
    console.log(user.firstname + " " + user.lastname);
}

showUser({lastname: 'aa', firstname:'bb'});

showUser2({lastname: 'cc', firstname:'dd'});

showUser2({lastname: 'ee', firstname:'ff', address:'aci'});

interface IUser {
    lastname : string, 
    firstname : string,
    address? : string,
    //per permettere di inserire valori opzionali:
    [propName : string] : any
}