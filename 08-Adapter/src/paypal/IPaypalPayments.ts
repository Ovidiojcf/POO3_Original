import Token from "../Utils/Token";

export default interface IPaypalPayments{

    authToken() : Token;
    paypalPayment() : void;
    paypalReceive() : void;
}