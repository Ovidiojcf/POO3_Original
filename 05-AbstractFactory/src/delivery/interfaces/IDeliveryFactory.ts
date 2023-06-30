import IDrink from "../../item/drink/interfaces/Idrink";
import IFood from "../../item/food/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink(): IDrink;
    createDeliveryFood(): IFood;
}