import Bread from "../../components/Bread";
import Protein from "../../components/Protein";
import Salad from "../../components/Salad";
import SanduicheType from "../../components/SanduicheType"
import Sauces from "../../components/Sauces";

export default class Sanduiche{
    private _SanduicheType : SanduicheType;
    private _Bread : Bread;
    private _Protein : Protein;
    private _Salad : Salad;
    private _Sauces : Sauces[] = [];
    /**
     * Getter SanduicheType
     * @return {SanduicheType}
     */
	public get SanduicheType(): SanduicheType {
		return this._SanduicheType;
	}

    /**
     * Getter Bread
     * @return {Bread}
     */
	public get Bread(): Bread {
		return this._Bread;
	}

    /**
     * Getter Protein
     * @return {Protein}
     */
	public get Protein(): Protein {
		return this._Protein;
	}

    /**
     * Getter Salad
     * @return {Salad}
     */
	public get Salad(): Salad {
		return this._Salad;
	}

    /**
     * Getter Sauces
     * @return {Sauces[] }
     */
	public get Sauces(): Sauces[]  {
		return this._Sauces;
	}

    /**
     * Setter SanduicheType
     * @param {SanduicheType} value
     */
	public set SanduicheType(value: SanduicheType) {
		this._SanduicheType = value;
	}

    /**
     * Setter Bread
     * @param {Bread} value
     */
	public set Bread(value: Bread) {
		this._Bread = value;
	}

    /**
     * Setter Protein
     * @param {Protein} value
     */
	public set Protein(value: Protein) {
		this._Protein = value;
	}

    /**
     * Setter Salad
     * @param {Salad} value
     */
	public set Salad(value: Salad) {
		this._Salad = value;
	}

    /**
     * Setter Sauces
     * @param {Sauces[] } value
     */
	public set Sauces(value: Sauces[] ) {
		this._Sauces = value;
	}
    public addSauces(sauces : Sauces){
        this._Sauces.push(sauces);
    }


}