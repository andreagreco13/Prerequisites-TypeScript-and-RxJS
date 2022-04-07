abstract class Logger{
    abstract log (msg : string) : void
    generateId() : number {
        return Math.round(Math.random()*100000); 
    } 
}


interface Log {
    msg : string
    id : number
    
}

//Per utilizzare la classe devo estenderla
// let log = new Logger(); NO!

class ConsoleLogger extends Logger implements Log{
    msg: string = '';
    id: number = 0;
    log(msg: string): void {
        console.log(msg);
    }

}

let cLog = new ConsoleLogger();
cLog.log('Logging to console');
console.log(cLog.generateId());