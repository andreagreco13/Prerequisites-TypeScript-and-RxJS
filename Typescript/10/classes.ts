// classes: public, protected private

export{};

class Lesson{
    public type: string
    public lenght: number
    public title: string
    protected description?: string
    //private invece viene vista solo all'interno della classe
    private instances: number = 0;
    protected incInstances(): void {
        this.instances++;
    }

  constructor(
    type: string, 
    lenght: number, 
    title: string, 
    description?: string
) {
    this.type = type
    this.lenght = lenght
    this.title = title
    this.description = description
    this.incInstances();
  }
        
}

class VideoLesson extends Lesson{
    setDescription(desc:string){
        this.description = desc;
        this.incInstances();
        //Posso farlo se è protected, perché è una sottoclasse 
    }
}

let lesson = new Lesson(
    'VideoCourse', 
    3, 
    'Intro', 
    ''
);
/* Deve essere public, altrimenti non funziona: 
lesson.description = 'This is my course desc'; */

console.log(lesson);