import IBuilder from "../builders/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";



export default class Director{

    constructor(private builder : IBuilder){}

    constructorAdult(){
        this.builder.setSanduicheType(SanduicheType.ADULT);
        this.builder.setBread(Bread.ITALIAN_CHEESE);
        this.builder.setProtein(Protein.STEAK);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.addSauces( new Sauces("BARBECUE"));
        this.builder.addSauces( new Sauces("CHIPOTTE"));
    }

    constructorKids(){
        this.builder.setSanduicheType(SanduicheType.KIDS);
        this.builder.setBread(Bread.HONEY_OAT);
        this.builder.setProtein(Protein.CHIKEN);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.addSauces( new Sauces("CHIPOTTE"));
    }

}