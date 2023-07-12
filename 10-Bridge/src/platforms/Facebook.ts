import IPlatform from "./IPlatform";

export default class Facebook implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("Facebook: Plataforma Configurada");
    }
    configureRMTP(): void {
        this.authToken
        console.log("Facebook: Configurando Plataforma.");
    }
    authToken(): void {
        console.log("Facebook: Autenticando Token.");
    }

}