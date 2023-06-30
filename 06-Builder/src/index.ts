import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

director.constructorSedanCar();
const sedan : Vehicle = builder.getVehicle();
imprimeDetalhes(sedan);

director.constructorTruck();
const truck : Vehicle = builder.getVehicle();
imprimeDetalhes(truck);

function imprimeDetalhes( vehicle : Vehicle){
    console.log("Construindo Veiculo: "+ vehicle.vehicleType);
    console.log("Potencia: "+ vehicle.engine.power);
    console.log("Transmissão: "+ vehicle.trasmission);
    console.log("Assentos: "+ vehicle.seats)
    console.log("Rodas: "+ vehicle.wheels.length + " aro: "+ vehicle.wheels[0].rim); 
}