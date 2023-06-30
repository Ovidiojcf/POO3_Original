import Token from "../Utils/Token";

export default interface IPayonnerPayment{

    authToken() : Token;
    sendPayment() : void;
    receivePayment() : void;
}