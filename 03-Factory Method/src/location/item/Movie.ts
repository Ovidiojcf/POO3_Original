import IItem from "./interface/IItem";

export default class Movie implements IItem{
    start(): void {
        this.getDescription();
        console.log("Movie: Iniciando FIME ;)");
    }
    getDescription(): void {
        console.log("Movie: Escolhendo FILME");
    }

}