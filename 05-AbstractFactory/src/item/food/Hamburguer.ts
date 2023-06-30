import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    startOrder(): void {
        console.log("Hamburguer: Pedido Anotado Patrão");
        this.getPreparation();
    }
    getPreparation(): void {
        console.log("Hamburguer: Inciando Preparo");
    }
    
}