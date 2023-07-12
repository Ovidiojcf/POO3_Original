
import IConsole from "../consoles/IConsole";
import IGaming from "./IGaming";

export default class Play implements IGaming{
    constructor(private console: IConsole){}
    
    playing(): void {
        throw new Error("Iniciando o JOGO.");
    }
    result(): void {
        throw new Error("Fase 1 iniciada.");
    }

}