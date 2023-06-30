export default class Sauces{

    constructor(private _sauces: string){}

    get sauces() : string{
        return this._sauces;
    }
    
    set sauces(sauces : string){
        this._sauces = sauces;
    }
}