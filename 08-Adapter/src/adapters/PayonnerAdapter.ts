import Token from "../Utils/Token";
import Payonner from "../payonner/Payonner";
import IPaypalPayments from "../paypal/IPaypalPayments";

export default class PayonnerAdapter implements IPaypalPayments{
    private token : Token;

    constructor(private payonner : Payonner){
        console.log("Adaptamdo Payonner para Paypal");
    }
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this.payonner.sendPayment();

    }
    paypalReceive(): void {
        return this.payonner.receivePayment();
    }

}