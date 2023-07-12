import IPlatform from "../platforms/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live{
    constructor(platform : IPlatform){
        super(platform);
    }

    subtitutles(): void{
        console.log("Legendas Ativadas");
    }
    coments(): void{
        console.log("Comentarios Ativados");
    }
}