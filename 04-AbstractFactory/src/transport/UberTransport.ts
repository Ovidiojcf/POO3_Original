import Airplane from "../vehicles/aerial/Airplane";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Car from "../vehicles/land/Car";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicles";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class UberTransport implements ITransportFactory{
    createTranportVehicle(): ILandVehicle {
        return new Car();
    }
    createTransportIAircraft(): IAircraft {
        return new Airplane();
    }

}