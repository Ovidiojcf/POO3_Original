import SoftDrink from "../item/drink/SoftDrink";
import IDrink from "../item/drink/interfaces/Idrink";
import HotDog from "../item/food/HotDog";
import IFood from "../item/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }
}