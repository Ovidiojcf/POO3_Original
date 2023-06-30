import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheels from "../components/Wheels";
import Vehicle from "../products/Vehicle";

export default interface IBuilder{
    reset() : void;
    getVehicle() : Vehicle;
    addWheel(whell : Wheels);
    setVehicleType(value: VehicleType);
    setSeats(seats: number);
    setEngine(engine: Engine);
    setTransmission(value: Transmission);

}