import IConsole from "./IConsole";

export default class Xbox implements IConsole{
    constructor(){
        this.configureGame();
        console.log("Xbox: Voce está on-line");
    }
    configureGame(): void {
        this.authToken();
        console.log("Xbox: Preparando configurações de Jogo");
    }
    authToken(): void {
        console.log("Xbox: Autenticando o Usuario");
    }

}