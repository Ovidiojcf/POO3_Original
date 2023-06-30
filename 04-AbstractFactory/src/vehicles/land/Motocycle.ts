import ILandVehicle from "./interfaces/ILandVehicles";

export default class Motorcycle implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Iniciando o trajeto");
    }
    getCargo(): void {
        console.log("Moto: Passageiro na garupa!!");
    }

}