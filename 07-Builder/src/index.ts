import Director from "./directors/Director";
import SanduicheBuilder from "./builders/SanduicheBuilder";
import Sanduiche from "./products/Sanduiche/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructorAdult();
const adult : Sanduiche = builder.getSanduiche();
imprimeDetalhes(adult);
director.constructorKids();
const kids : Sanduiche = builder.getSanduiche();
imprimeDetalhes(kids);

function imprimeDetalhes( sanduiche : Sanduiche){
    console.log("Tipo: "+ sanduiche.SanduicheType);
    console.log("Pão: "+ sanduiche.Bread);
    console.log("Proteina: "+ sanduiche.Protein);
    console.log("Salada: "+ sanduiche.Salad)
    sanduiche.Sauces.forEach(value => {
        console.log(value.sauces);
    })
}