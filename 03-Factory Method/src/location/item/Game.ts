import IItem from "./interface/IItem";

export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("Game: Inciando JOGO");
    }
    getDescription(): void {
        console.log("Game: Escolhendo JOGO");
    }

}