import IConsole from "./IConsole";



export default class PlayStation implements IConsole{
    constructor(){
        this.configureGame();
        console.log("PlayStation: Voce está on-line");
    }
    configureGame(): void {
        this.authToken();
        throw new Error("PlayStation: Preparando configurações de Jogo");
    }
    authToken(): void {
        console.log("PlayStation: Autenticando o Usuario");
    }
}