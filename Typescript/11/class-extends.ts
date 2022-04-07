export{};
class AnimalBase {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    move(distance: number){
        
    }
    getName(){
        return 'my name is ' + this.name;
    }
}

class Birds extends AnimalBase{
    place: string

//il costruttore della classe estesa ha la forma: 
  constructor(name: string, place: string) {
      super(name);
      this.place = place;
  }
    

    getPlace(): string{
        return ' and I come from the ' + this.place;
    }

    setPlace(place: string) : void {
        this.place = place;
    }
}

let dove = new Birds('Dove', 'ocean');
/* dove.setPlace('sea'); */
console.log(dove.getName() + dove.getPlace())

