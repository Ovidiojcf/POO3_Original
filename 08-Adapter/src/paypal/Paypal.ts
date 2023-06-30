import Token from "../Utils/Token";
import IPaypalPayments from "./IPaypalPayments";

export default class Paypal implements IPaypalPayments{
    private token : Token;
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authToken();
        console.log("Token: "+ this.token.token);
        console.log("Enviando pagamento via Paypal");
    }
    paypalReceive(): void {
        this.token = this.authToken();
        console.log("Token: "+ this.token.token);
        console.log("Recebendo pagamento via Paypal");
    }

}