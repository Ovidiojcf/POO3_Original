
import Client from "./clients/Client";
import NineNineTransport from "./transport/NineNineTransport";
import UberTransport from "./transport/UberTransport";
import Company from "./transport/consts/Company";
import ITransportFactory from "./transport/interfaces/ITransportFactory";

const currentCompany = Company.UBER;
let factory! : ITransportFactory;
switch(currentCompany){
    case Company.UBER:
        factory = new UberTransport();
        break;
    case Company.NININE:
        factory = new NineNineTransport();
        break;
    default:
        console.log("Companhia não definida");
}

const client = new Client(factory);
client.startRoute();
