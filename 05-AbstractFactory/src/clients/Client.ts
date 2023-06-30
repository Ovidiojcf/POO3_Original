import IDeliveryFactory from "../delivery/interfaces/IDeliveryFactory";
import IDrink from "../item/drink/interfaces/Idrink";
import IFood from "../item/food/interfaces/IFood";

export default class Client{
    private drink : IDrink;
    private food : IFood;

    constructor(factory: IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }

    startOrder() : void{
        this.drink.startOrder();
        this.food.startOrder();
    }
}