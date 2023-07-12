
import IConsole from "../consoles/IConsole";
import IGaming from "./IGaming";

export default class Play implements IGaming{
    constructor(private console: IConsole){}
    
    playing(): void {
        console.log("Iniciando o JOGO.");
    }
    result(): void {
        console.log("Fase 1 iniciada.");
    }

}