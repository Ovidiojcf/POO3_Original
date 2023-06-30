import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Aviao: iniciando decolagem..");
    }
    getCargo(): void {
        console.log("Aviao: passageiros embarcados!");
    }
    checkWind(): void {
        console.log("Aviao: ventos a 35km, decolagem autorizada");
    }

}