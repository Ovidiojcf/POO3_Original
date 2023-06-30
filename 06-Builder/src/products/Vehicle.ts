import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheels from "../components/Wheels";

export default class Vehicle{
    private _vehicleType : VehicleType;
    private _seats : number;
    private _engine : Engine;
    private _trasmission : Transmission;
    private _wheels : Wheels[] = [];
    /**
     * Getter vehicleType
     * @return {VehicleType}
     */
	public get vehicleType(): VehicleType {
		return this._vehicleType;
	}

    /**
     * Getter seats
     * @return {number}
     */
	public get seats(): number {
		return this._seats;
	}

    /**
     * Getter engine
     * @return {Engine}
     */
	public get engine(): Engine {
		return this._engine;
	}

    /**
     * Getter trasmission
     * @return {Transmission}
     */
	public get trasmission(): Transmission {
		return this._trasmission;
	}

    /**
     * Getter wheels
     * @return {Wheels[] }
     */
	public get wheels(): Wheels[]  {
		return this._wheels;
	}

    /**
     * Setter vehicleType
     * @param {VehicleType} value
     */
	public set vehicleType(value: VehicleType) {
		this._vehicleType = value;
	}

    /**
     * Setter seats
     * @param {number} value
     */
	public set seats(value: number) {
		this._seats = value;
	}

    /**
     * Setter engine
     * @param {Engine} value
     */
	public set engine(value: Engine) {
		this._engine = value;
	}

    /**
     * Setter trasmission
     * @param {Transmission} value
     */
	public set trasmission(value: Transmission) {
		this._trasmission = value;
	}

    /**
     * Setter wheels
     * @param {Wheels[] } value
     */
	public set wheels(value: Wheels[] ) {
		this._wheels = value;
	}

    public addWheel(whell : Wheels){
        this._wheels.push(whell);
    }
    
}