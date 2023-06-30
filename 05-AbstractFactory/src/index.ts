import Client from "./clients/Client";
import { AiqFomeDelivery } from "./delivery/AiqFomeDelivery";
import IFoodDelivery from "./delivery/IFoodDelivery";
import Delivery from "./delivery/consts/Delivery";
import IDeliveryFactory from "./delivery/interfaces/IDeliveryFactory";

const currentDelivery = Delivery.IFOOD;
let factory! : IDeliveryFactory;
switch(currentDelivery){
    case Delivery.IFOOD:
        factory = new IFoodDelivery();
        break;
    case Delivery.AIQFOME: 
        factory = new AiqFomeDelivery();
        break;
    default:
        console.log("Delivery Inexistente");
}

const client = new Client(factory);
client.startOrder();