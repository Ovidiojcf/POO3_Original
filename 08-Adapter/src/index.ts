import PayonnerAdapter from "./adapters/PayonnerAdapter";
import IPayonnerPayment from "./payonner/IPayonnerPayment";
import Payonner from "./payonner/Payonner";
import IPaypalPayments from "./paypal/IPaypalPayments";
import Paypal from "./paypal/Paypal";
/*
const payment: IPaypalPayments = new Paypal();
payment.paypalPayment();
payment.paypalReceive();


const payment2 : IPayonnerPayment = new Payonner();
payment2.sendPayment();
payment2.receivePayment();*/

const payment : IPaypalPayments = new PayonnerAdapter(new Payonner);
payment.paypalPayment();
payment.paypalReceive();