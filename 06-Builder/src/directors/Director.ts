import IBuilder from "../builders/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheels from "../components/Wheels";

export default class Director{

    constructor(private builder : IBuilder){}

    constructorSedanCar(){
        this.builder.setVehicleType(VehicleType.SEDAN);
        this.builder.setSeats(5);
        this.builder.setTransmission(Transmission.AUTOMATIC);
        this.builder.setEngine(new Engine(1600));
        this.builder.addWheel(new Wheels(20));
        this.builder.addWheel(new Wheels(20));
        this.builder.addWheel(new Wheels(20));
        this.builder.addWheel(new Wheels(20));
    }

    constructorTruck(){
        this.builder.setVehicleType(VehicleType.TRUCK);
        this.builder.setSeats(3);
        this.builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL);
        this.builder.setEngine(new Engine(1300));
        this.builder.addWheel(new Wheels(25));
        this.builder.addWheel(new Wheels(25));
        this.builder.addWheel(new Wheels(25));
        this.builder.addWheel(new Wheels(25)); 
        this.builder.addWheel(new Wheels(25));
        this.builder.addWheel(new Wheels(25)); 
    }
}