import Beer from "../item/drink/Beer";
import IDrink from "../item/drink/interfaces/Idrink";
import Hamburguer from "../item/food/Hamburguer";
import IFood from "../item/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export class AiqFomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }

}