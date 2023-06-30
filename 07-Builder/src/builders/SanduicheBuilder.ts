import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";
import Sanduiche from "../products/Sanduiche/Sanduiche";
import IBuilder from "./IBuilder";

export default class SanduicheBuilder implements IBuilder{
    private sanduiche = new Sanduiche();
    reset(): void {
        this.sanduiche = new Sanduiche();
    }
    getSanduiche(): Sanduiche {
        const result : Sanduiche = this.sanduiche;
        this.reset();
        return result;
    }
    setSanduicheType(value: SanduicheType) {
        this.sanduiche.SanduicheType = value;
    }
    setBread(value: Bread) {
        this.sanduiche.Bread = value;
    }
    setProtein(value: Protein) {
        this.sanduiche.Protein = value;
    }
    setSalad(value: Salad) {
       this.sanduiche.Salad = value;
    }
    addSauces(sauces: Sauces) {
        this.sanduiche.addSauces(sauces);
    }

}