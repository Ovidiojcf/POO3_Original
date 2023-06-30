import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Motorcycle from "../vehicles/land/Motocycle";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicles";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory{
    // TYPE dentro do metodo
    // Necessário usar o Enum
    createTranportVehicle(): ILandVehicle {
        return new Motorcycle();
    }
    createTransportIAircraft(): IAircraft {
        return new Helicopter();
    }

}