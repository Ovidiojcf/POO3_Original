import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    startOrder(): void {
        console.log("HotDog: Pedido de Cachorro Quente");
        this.getPreparation();
    }
    getPreparation(): void {
        console.log("HotDog: Colando Salsicha");
    }

}